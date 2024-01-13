const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


/*
    View Engine - ExpressJs
*/ 

app.set("view engine",ejs);

app.use(express.urlencoded({extended:true}));


/*
    Environment Variables
*/ 

const PORT = process.env.PORT || 8000;
const DB_URL= process.env.DB_URL;


/*
    Database Connection
*/ 

const dbConnect =async ()=>{
    await mongoose.connect(DB_URL);
}
dbConnect()
.then(res=>{
console.log("Connected to Database");
})
.catch(err=>{
    console.log("Error Connecting", err);
});



/*
    Server is Listening
*/ 

app.listen(PORT,()=>{
    console.log(`Listening at PORT ${PORT}`);
});

