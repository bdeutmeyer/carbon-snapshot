const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
        .populate('electricConsumption')
        .populate('naturalGasConsumption')
        .populate('gasolineConsumption')
        // .populate({
        //   path: 'snapshots',
        // ---leaving out for now since we have no snapshots to pull. Will want to have it show ...what? most recent snap? aggregate for the calendar year?
        // });
      }

      // populate({
      //   path: 'fans',
      //   match: { age: { $gte: 21 } },
      //   // Explicitly exclude `_id`, see http://bit.ly/2aEfTdB
      //   select: 'name -_id'
      // }).
      // exec();

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
  },
};

module.exports = resolvers;