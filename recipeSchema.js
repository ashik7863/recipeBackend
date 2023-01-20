const mongoose = require("mongoose");
const tblSchema = new mongoose.Schema({
    id:Number,
  name: String,
  desc: String,
  imgurl: String,
  creatorid:String
});
module.exports = mongoose.model("table2", tblSchema);