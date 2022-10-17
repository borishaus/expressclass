// sets up express app
const express = require('express');
const chalk=require("chalk");
const morgan = require('morgan'); // this logs web traffic lots of different things you can pass into morgan
const path = require('path');
const app = express();
const PORT =process.env.PORT || 3000;
const sessionsRouter=express.Router();

app.use(morgan('tiny'));//tiny
app.use(express.static(path.join(__dirname,'/public/'))); 
//telling ejs where the templates will be
app.set('views','./src/views');
app.set('view engine', 'ejs');


//would normally be in sessionsRouter.js
sessionsRouter.route('/')
    .get((req,res)=> {
        res.render('sessions',{sessions:[
            {title:'Session 1', description:'this is session 1'},
            {title:'Session 2', description:'this is session 2'},
            {title:'Session 3', description:'this is session 3'},
            {title:'Session 4', description:'this is session 4'}
        ]})
    })
sessionsRouter.route('/1')
    .get((req,res)=> {
        res.send('hello single sessions')
    });


//req res sends to port
app.use('/sessions', sessionsRouter);
app.get('/',(req,res)=>{
    res.render('index',{title:'Globomantics',data:['a','b','c']});
});


//tells to listen on port 3000
app.listen(PORT,()=>{
    console.log(`listening to port ${chalk.green(PORT)}` );
});