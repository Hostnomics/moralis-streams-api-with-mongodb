
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

5. Build out /index.js [(7:44)](https://youtu.be/AeBKBt0V2zE?t=464)
    - See [Moralis Streams Response Body Documentation](https://docs.moralis.io/streams-api/evm/response-body).
    - 

6. Run local server with (heroku, own server, but host it locally with node)
    - `node index.js`
    - "_Listening to streams_"

7. Create a tunnel using ngrok on the port we are using (3000), giving us a temporary URL where we can access our local host express server: 
    - `ngrok http 3000`

    - Creates temporary URL: `http://aaa5-24-97-78-138.ngrok.io`

    - Install dependency with (from [ngrok npm](https://www.npmjs.com/package/ngrok))
        - `npm i ngrok` (_for version 5.0_)
            - [ngrok 5.0 docs](https://www.npmjs.com/package/ngrok#local-install)

    - Install version used in **Moralis Docs (4.3.3)** with this command from the [ngrok v4 docs](https://www.npmjs.com/package/ngrok/v/4.3.3)

        - **npm install ngrok@4.3.3 -g**

        - _We used the -g global flag_

8. Add your ngrok end point URL to your [admin.moralis.io/streams](https://admin.moralis.io/projects) Project Dashboard (at [11:43](https://youtu.be/AeBKBt0V2zE?t=703))

    - Project Dashboard => **Settings** and set up a [Secret Key](https://docs.moralis.io/streams-api/evm/setup-secret-key) in your settings page. 
    - Click on **Streams** => **Create**
    - Click on **Create from Admin Panel** (Defaut on admin.moralis.io/streams) which looks like this: ![project dashboard create stream from Admin](https://i.imgur.com/nnWQp7E.png)

    - Add **Contract Address** (_like our v13.1_) 




