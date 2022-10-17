// sets up express app
const express = require('express');
const chalk=require("chalk");
const morgan = require('morgan'); // this logs web traffic lots of different things you can pass into morgan
const path = require('path');
const app = express();
const PORT =process.env.PORT || 3000;
app.use(morgan('tiny'));
/* express . static handles static. path is part of node but needs to be called. 
will shwo index.html before ln 14 because it is called index.html.*/
app.use(express.static(path.join(__dirname,'/public/'))); 

//req res sends to port
app.get('/',(req,res)=>{
    res.send("hello from my app");
});

//tells to listen on port 3000
app.listen(PORT,()=>{
    console.log(`listening to port ${chalk.green(PORT)}` );
});