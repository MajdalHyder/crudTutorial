const mongoose = require('mongoose');

const connectDB = async() =>{
  try{
    // mongodb connection String
    const con = await mongoose.connect("mongodb+srv://admin:admin123@cluster0.om4w9.mongodb.net/users?retryWrites=true&w=majority"
, {
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useFindAndModify:false,
      useCreateIndex:true
    });

    console.log(`MongoDB conected : $(con.connection.host)`)
  }catch(err){
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectDB;