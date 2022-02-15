const { Schema, model } = require('mongoose');
const EquipmentSchema = require('./Equipment');

const contractSchema = new Schema(
    {
        checkOutDate: {
            type: String,
            required: true
        },
        checkInDate: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            required: true,
            default: true
        },
        equipment: [EquipmentSchema]
    }
)

const Contract = model('Contract', contractSchema);

module.exports = Contract;
