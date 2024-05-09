const mongoose = require('mongoose');
require('dotenv').config();

const getConnectionString = () =>{
    let connectionURI = process.env.DATABASE_LOCAL
    connectionURI = connectionURI.replace('<username>', process.env.DATABASE_NAME)
    connectionURI = connectionURI.replace('<password>', process.env.DATABASE_PASSWORD)
    return connectionURI;
}
const connectDB = async()=>{
    console.log('connecting to DATABASE');
    const uri = getConnectionString();
    await mongoose.connect(uri, {dbName: process.env.DB_NAME})
    console.log("connected to DATABASE");
}

module.exports=connectDB;