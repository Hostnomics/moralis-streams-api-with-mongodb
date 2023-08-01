
## Cloud.MongoDB.com

1. Create Cluster0. (_One free shared account_)
2. Set up **Database Access**
3. Set up **Network Access**
4. Click **Database** => **Connect** => "App/Drivers" **use MongoDBs Native Drivers**.

![select mongodb drivers connection](https://i.imgur.com/rBnm1Nu.png)

5. Get the MongoDB URI

![mongodb uri](https://i.imgur.com/lvB1PKt.png)



## Create Node Express.js App [(~3:14)](https://youtu.be/AeBKBt0V2zE?t=194)

1. Initialize Node.js Project
    - `npm init -y`
2. Create an `index.js` and `.env` files with touch

3. Setup an Express.js project with cors (cross-site scripting) dotenv and mongoose
    - `npm i express cors dotenv mongoose`


4. Utils folder [(4:28)](https://youtu.be/AeBKBt0V2zE?t=268)
    - Create two helper functions: 
        - `ConnectToDb.js`
        - `TransferSchema.js`



