const express = require('express');
//const sessionsRouter=express.Router();
const {MongoClient, ObjectID} = require('mongodb');

const authRouter = express.Router();

authRouter.route('/signUp').post((req,res)=>{
    res.json(req.body);
});


module.exports=authRouter;