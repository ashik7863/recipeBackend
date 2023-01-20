const mongoose = require("mongoose");
const tblSchema = new mongoose.Schema({
    id:Number,
    items:String,
  amount: Number,
  unit: String,
  recipeid:Number
});
module.exports = mongoose.model("table3", tblSchema);