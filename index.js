require('dotenv').config();
const express = require('express');
const path = require('path');
const ejs = require('ejs');
require("./config/database");

const app = express();

app.set("view engine",ejs);
app.set("views" , path.resolve("./views"));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 8000;

// ROUTES

const router = require('./routes/indexRoute');

// User Routes
app.use("/",router);


/*
    Server 
*/ 

app.listen(PORT,()=>{
    console.log(`Listening at PORT ${PORT}`);
});

