const { Schema, model } = require('mongoose');

const electricConsumptionSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  kWh: {
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

const ElectricConsumption = model('ElectricConsumption', electricConsumptionSchema);

module.exports = ElectricConsumption;
