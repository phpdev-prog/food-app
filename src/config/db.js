require('dotenv').config()
const mongoose = require("mongoose")



async function connectDB() {
    const conn =  mongoose.connect(process.env.MONGO_URI)
    if(conn){
        console.log(`MongoDB Connected on ${mongoose.connection.host}`)
    }
}

module.exports = connectDB

