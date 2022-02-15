const { Schema, model } = require('mongoose');
const Contract = require ('./Contract')

const customerSchema = new Schema (
{

    customerName: {
        type: String, 
        required: true, 
        unique: false, 
        trim: true
    },
    customerLastName: {
        type: String, 
        required: true, 
        unique: false, 
        trim: true
    },
    customerPhoneNumber: {
        type: Number,
        required: true, 
        unique: true,
        
        
    },
    customerEmail: {
        type: String,
        required: true, 
        unique: true,
        trim: true
    },
 contract: [Contract.schema]
},
{
    toJSON: {
      virtuals: true
    }
  }
);
const Customer = model ('Customer', customerSchema);

module.exports = Customer; 