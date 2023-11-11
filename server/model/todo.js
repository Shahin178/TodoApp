const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  data: { type: String, required: true },
  done: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

exports.module = mongoose.model("todo", todoSchema);
