//import mongoose
const mongoose = require('mongoose');

//Create a connection string to connect db using mongoose
const connectionString=process.env.DATABASE
//connection code 
mongoose.connect(connectionString,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(()=>{
    console.log('Mongodb Atlas Connected successfully');
}).catch((error)=>{
    console.log('Mongodb Atlas Connection Failed: ' + error);
})
