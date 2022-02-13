const { Schema, model } = require('mongoose');

const equipmentSchema = new Schema(
    {
       
        boots: [{
            type: Schema.Types.ObjectId,
            ref: "Boot"
        }],
        skis: [{
            type: Schema.Types.ObjectId,
            ref: "Ski"
        }],
        snowboards: [{
            type: Schema.Types.ObjectId,
            ref: "Snowboard"
        }]
    }
)

module.exports = equipmentSchema;