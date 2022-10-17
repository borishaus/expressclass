// sets up express app
const express = require('express');
const chalk=require("chalk");
const morgan = require('morgan'); // this logs web traffic lots of different things you can pass into morgan

const app = express();
//const chalky = chalk();
app.use(morgan('tiny'));


//req res sends to port
app.get('/',(req,res)=>{
    res.send("hello from my app");
});

//tells to listen on port 3000
app.listen(3000,()=>{
    console.log(`listening on port ${chalk.green('3000')}` );
});