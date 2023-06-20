//loads .env file content into process.env
require('dotenv').config()

//Import express
const express = require('express');

//import cors
const cors = require('cors');

//import db
require('./db/connection')



//import router
const router= require('./routes/router')

//create server application
const server= express();


//port definition
const PORT=3001 || process.env.PORT

//export uploads folder to client
server.use('/uploads',express.static('./uploads'))

//use cors
server.use(cors());

//To parse
server.use(express.json())

//use routes
server.use(router)

//define port and run the server application
server.listen((PORT),()=>{
    console.log('listening on port '+PORT);
})

//Request resolving
server.get('/',(req,res)=>{
    res.send('Get request')
})