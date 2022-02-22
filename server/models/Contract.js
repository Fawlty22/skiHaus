const { Schema, model } = require('mongoose');
const EquipmentSchema = require('./Equipment');

const contractSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        checkOutDate: {
            type: Date,
            required: true
        },
        checkInDate: {
            type: Date,
            required: true
        },
        active: {
            type: Boolean,
            required: true,
            default: true
        },
        equipment: EquipmentSchema
    }
)

const Contract = model('Contract', contractSchema);

module.exports = Contract;
