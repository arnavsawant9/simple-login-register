const mongoose = require('mongoose');
const connectDB = async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/mydatabase');
        console.log('connected to mongodb');
    } catch(error){
        console.log(`Some error occured => ${error}`);
    }
}

module.exports = connectDB;