const { Schema, model } = require('mongoose');

const bootSchema = new Schema(
    {
        brand: {
            type: String,
            required: true,
            trim: true
        },
        model: {
            type: String,
            required: true,
        },
        condition: {
            type: String,
            required: true,
            default: 'Good'
        },
        available: {
            type: Boolean,
            required: true,
            default: true
        }
    }, 
    {
        toJSON: {
            virtuals: false
        }
    }
);

const Boot = model('Boot', bootSchema);

module.exports = Boot;