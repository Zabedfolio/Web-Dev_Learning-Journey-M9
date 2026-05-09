const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-hblkeaq-shard-00-00.mldxc9s.mongodb.net:27017,ac-hblkeaq-shard-00-01.mldxc9s.mongodb.net:27017,ac-hblkeaq-shard-00-02.mldxc9s.mongodb.net:27017/?ssl=true&replicaSet=atlas-94etkw-shard-0&authSource=admin&retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});





const run = async()=>{
    try{
        await client.connect();

        const db = client.db('simpleCrud');
        const userCollection = db.collection('users');

        app.get('/users', async(req,res)=>{
            const cursor = userCollection.find();
            const result = await cursor.toArray();
            res.send    (result);
        })

        await client.db('admin').command({ping:1});
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally{
        // await client.close();
    }
}
run().catch(console.dir);






app.get('/', (req, res) => {
    res.send('simple crud server is running');
})

app.listen(port, () => {
    console.log(`Simple crud server is running on port ${port}`);
})

// const run = async()=>{

// }
// run().catch(console.dir)