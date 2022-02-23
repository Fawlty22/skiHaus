const { Schema, model } = require("mongoose");
const EquipmentSchema = require("./Equipment");
const dateFormat = require('../utils/dateFormat');

const contractSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  checkOutDate: {
    type: Date,
    get: (timestamp) => dateFormat(timestamp),
    required: true,
  },
  checkInDate: {
    type: Date,
    get: (timestamp) => dateFormat(timestamp),
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  equipment: EquipmentSchema,
});

const Contract = model("Contract", contractSchema);

module.exports = Contract;
