const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  description: { type: String },
  done: { type: Boolean, default: false },
},
  {
    timestamps: Date
  }
);
module.exports = mongoose.model('Task', taskSchema);