const express = require('express');
const sessionsRouter=express.Router();
const {MongoClient, ObjectID} = require('mongodb');
//const sessions = require('../data/sessions.json');

sessionsRouter.route('/')
    .get((req,res)=> {
        const url= 'mongodb+srv://boris:1234@globomantics.esl9twf.mongodb.net/?retryWrites=true&w=majority';
        const dbName ='globomantics';
    
    
        (async function mongo(){
            let client;
            try{
                client = await MongoClient.connect(url);
                console.log("connected to the mongo db");
    
                const db = client.db(dbName);
    
                const sessions = await db.collection('sessions').find().toArray();
                res.render('sessions',{sessions});
            }catch(error){
                console.log(error.stack);
            }
        }());
    })
sessionsRouter.route('/:id').get((req,res)=> {
        const id = req.params.id;
        const url= 'mongodb+srv://boris:1234@globomantics.esl9twf.mongodb.net/?retryWrites=true&w=majority';
        const dbName ='globomantics';
    
    
        (async function mongo(){
            let client;
            try{
                client = await MongoClient.connect(url);
                console.log("connected to the mongo db");
    
                const db = client.db(dbName);
    
                const session = await db.collection('sessions').findOne({_id: new ObjectID(id)});
                res.render('session', {
                    session
                })
            }catch(error){
                console.log(error.stack);
            }
        }());

    });

module.exports = sessionsRouter;