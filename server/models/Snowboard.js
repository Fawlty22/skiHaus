const { Schema, model } = require('mongoose');

const snowboardSchema = new Schema(
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

const Snowboard = model('Snowboard', snowboardSchema);

module.exports = Snowboard;