const { Schema, model } = require('mongoose');

const naturalGasConsumptionSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  therms: {
    type: Number,
  },
  billDate: {
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

const NaturalGasConsumption = model('NaturalGasConsumption', naturalGasConsumptionSchema);

module.exports = NaturalGasConsumption;
