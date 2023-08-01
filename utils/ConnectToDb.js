// Built out (~5:30): https://youtu.be/AeBKBt0V2zE?t=330
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    if (mongoose.connections[0].readyState){
        return;
    }
    mongoose.connect(process.env.MONGODB_URI).then((res) => {
        console.log("Connected to MongoDb");
    }).catch((err) => {
        throw err;
    });
}

module.exports = { connectDB };