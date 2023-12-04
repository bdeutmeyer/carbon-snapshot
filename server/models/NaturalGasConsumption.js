const { Schema, model } = require('mongoose');

const naturalGasConsumptionSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  naturalGas: {
    therms: {
      type: Number,
    },
    billDate: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    comment: {
      type: String,
    },
  },
});

const NaturalGasConsumption = model('NaturalGasConsumption', naturalGasConsumptionSchema);

module.exports = NaturalGasConsumption;
