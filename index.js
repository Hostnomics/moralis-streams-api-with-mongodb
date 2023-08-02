//Added (7:44): https://youtu.be/AeBKBt0V2zE?t=464
const express = require("express");
const app = express();
const port = 3000; 
const cors = require('cors');

//Bring in our utils functions
const Transfer = require("./utils/TransferSchema").Transfers;
const connectDB = require("./utils/ConnectToDb").connectDB;

app.use(cors());
app.use(express.json());

app.post("/webhook", async (req, res) => {

    //When Moralis sends us a stream we will deconstruct the body coming in as 'req'
    // Streams Response Body Docs: https://docs.moralis.io/streams-api/response-body
    const {body} = req;

//Using ERC-20 Transfer Part of the Docs: https://docs.moralis.io/streams-api/evm/response-body#erc20-transfers
    // Check the status of the confirm key
    if(body.confirmed){
        return res.status(200).json(); 
    }

        //When '"confirmed": false,' use this logic: 
        await connectDB(); 

        let newTransfers = [];

        //Loop through and get all transfers b/t addresses
        for (transfer of body.erc20Transfers) {
            newTransfers.push({
                fromAddress: transfer.from,
                toAddress: transfer.to,
                value: transfer.value,
                valueWithDecimals: transfer.valueWithDecimals,
            });
        }

        //Use insert Many property of Mongoose if newTransfers array greater 0: (10:38)
        if (newTransfers.length > 0) {
            await Transfer.insertMany(newTransfers);
            console.log("Added New Transfers To DB");
        }


    return res.status(200).json();
});

app.listen(port, () => {
    console.log(`Listening to streams`);
});

