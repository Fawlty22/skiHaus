const mongoose = require('mongoose');

const { Schema } = mongoose;

const equipmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  condition: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
