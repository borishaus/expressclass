const express = require('express');
const adminRouter = express.Router();
const {MongoClient} = require('mongodb');
const sessions = require('../data/sessions.json');

adminRouter.route('/').get((req,res)=>{
    const url= 'mongodb+srv://boris:1234@globomantics.esl9twf.mongodb.net/?retryWrites=true&w=majority';
    const dbName ='globomantics';

    (async function mongo(){
        let client;
        try{
            client = await MongoClient.connect(url);
            console.log("connected to the mongo db");

            const db = client.db(dbName);

            const response = await db.collection('sessions').insertMany(sessions);
            res.json = (response)
        }catch(error){
            console.log(error.stack);
        }
    }());
});



module.exports = adminRouter;