const mongoose = require("mongoose");
const tblSchema = new mongoose.Schema({
    id:Number,
  name: String,
  userid: String,
  password: String,
});
module.exports = mongoose.model("table1", tblSchema);