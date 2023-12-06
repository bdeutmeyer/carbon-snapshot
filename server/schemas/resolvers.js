const { User, ElectricConsumption, NaturalGasConsumption, GasolineConsumption } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
        .populate('electricConsumption')
        .populate('naturalGasConsumption')
        .populate('gasolineConsumption')
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addElectricUse: async (parent, { electricCompany, kwh, billDate, carbonOutput }, context) => {
      if (context.user) {
        const electricConsumption = await ElectricConsumption.create({
          electricCompany,
          kwh,
          billDate,
          carbonOutput,
          userId: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { electricConsumption: electricConsumption._id } }
        );
        return electricConsumption;
      }
      throw AuthenticationError;
    },
    addNaturalGasUse: async (parent, { therms, billDate, carbonOutput }, context) => {
      if (context.user) {
        const natGasConsumption = await NaturalGasConsumption.create({
          therms,
          billDate,
          carbonOutput,
          userId: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { naturalGasConsumption: natGasConsumption._id } }
        );
        return natGasConsumption;
      }
      throw AuthenticationError;
    },
    addGasolineUse: async (parent, { gallons, purchaseDate, carbonOutput }, context) => {
      if (context.user) {
        const gasConsumption = await GasolineConsumption.create({
          gallons,
          purchaseDate,
          carbonOutput,
          userId: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { gasolineConsumption: gasConsumption._id } }
        );
        return gasConsumption;
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;