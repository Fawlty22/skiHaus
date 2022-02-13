const mongoose = require('mongoose');

const { Schema } = mongoose;

const contractSchema = new Schema({

  Equipment: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Equipment'
    }
  ],
  customer: [{
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  }]
});

const Contract = mongoose.model('Order', contractSchema);

module.exports = Contract;
