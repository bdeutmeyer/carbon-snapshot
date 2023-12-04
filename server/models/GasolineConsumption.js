const { Schema, model } = require('mongoose');

const gasolineConsumptionSchema = new Schema({
  userId: {
    type: String,
    required: true,
    },
  gasoline: {
    gallons: {
      type: Number,
    },
    purchaseDate:{
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    comment: {
      type: String,
    },
  },
});

const GasolineConsumption = model('GasolineConsumption', gasolineConsumptionSchema);

module.exports = GasolineConsumption;
