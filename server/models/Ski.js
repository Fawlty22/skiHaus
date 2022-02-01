const { Schema, model } = require('mongoose');

const skiSchema = new Schema(
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
        }
    }, 
    {
        toJSON: {
            virtuals: false
          }
    }
);

const Ski = model('Ski', skiSchema);

module.exports = Ski;