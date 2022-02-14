const { Schema, model } = require('mongoose');

const skiSchema = new Schema(
    //add id's
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
    }, 
    {
        toJSON: {
            virtuals: false
          }
    }
);

const Ski = model('Ski', skiSchema);

module.exports = Ski;