// built out (6:08): https://youtu.be/AeBKBt0V2zE?t=368 

const mongoose = require("mongoose");

const transferSchema = new mongoose.Schema(
    {
        fromAddress: {
            type: String,
        },
        toAddress: {
            type: String,
        },
        value: {
            type: String,
        },
        valueWithDecimals: {
            type: String,
        }
    },
    { timestamps: true }
);

let Transfers = mongoose.models.transfers || mongoose.model("transfers", transferSchema );

module.exports = { Transfers }