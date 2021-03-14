const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  fName : {
    type :String,
    required: true
  },
  lName : {
    type :String,
    required: true
  },
  email:{
    type: String,
    required:true,
    unique: true
  },
  gender: String,
  status:String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
