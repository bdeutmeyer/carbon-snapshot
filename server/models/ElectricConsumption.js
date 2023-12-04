const { Schema, model } = require('mongoose');

const electricConsumptionSchema = new Schema({
  userId: {
    type: String,
    required: true,
    },
  electricity: {
      kWh: {
        type: Number,
      },
      billDate:{
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
      comment: {
        type: String,
      },
    },
});

const ElectricConsumption = model('ElectricConsumption', electricConsumptionSchema);

module.exports = ElectricConsumption;
