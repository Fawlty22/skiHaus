const { Schema, model } = require('mongoose');

const equipmentSchema = new Schema(
    {
        equipmentId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        boots: [{
            type: Schema.Type.ObjectId,
            ref: "Boot"
        }],
        skis: [{
            type: Schema.Type.ObjectId,
            ref: "Ski"
        }],
        snowboards: [{
            type: Schema.Type.ObjectId,
            ref: "Snowboard"
        }]
    }
)

module.exports = equipmentSchema;