const { Schema, model } = require('mongoose');

const gasolineConsumptionSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  gallons: {
    type: Number,
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  carbonOutput: {
    type: Number,
  },
  comment: {
    type: String,
  },
});

const GasolineConsumption = model('GasolineConsumption', gasolineConsumptionSchema);

module.exports = GasolineConsumption;
