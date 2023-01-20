const mongoose = require("mongoose");
const tblSchema = new mongoose.Schema({
    id:Number,
    step:String,
  recipeid: Number,

});
module.exports = mongoose.model("table4", tblSchema);