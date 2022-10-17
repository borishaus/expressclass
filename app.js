// sets up express app
const express = require('express');
const chalk=require("chalk");
const morgan = require('morgan'); // this logs web traffic lots of different things you can pass into morgan
const path = require('path');
const app = express();
const PORT =process.env.PORT || 3000;
app.use(morgan('tiny'));//tiny
app.use(express.static(path.join(__dirname,'/public/'))); 
//telling ejs where the templates will be
app.set('views','./src/views');
app.set('view engine', 'ejs');


//req res sends to port
app.get('/',(req,res)=>{
    res.render('index',{title:'Welcome to Globomantics',data:['a','b','c']});
});

//tells to listen on port 3000
app.listen(PORT,()=>{
    console.log(`listening to port ${chalk.green(PORT)}` );
});