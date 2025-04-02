const mongoose = require("mongoose")

const mongoDbUrl = "mongodb+srv://manindersolitaire:mani123@cluster0.kkpgvue.mongodb.net/"

async function connectDB() {
    const conn =  mongoose.connect(mongoDbUrl)
    if(conn){
        console.log(`MongoDB Connected on ${mongoose.connection.host}`)
    }
}

module.exports = connectDB

