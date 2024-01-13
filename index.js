const express = require('express');
const path = require('path');
const ejs = require('ejs');
require('dotenv').config();

const app = express();


/*
    View Engine - ExpressJs
*/ 

app.set("view engine",ejs);
app.set("views" , path.resolve("./views"));

app.use(express.urlencoded({extended:true}));


/*
    Environment Variables
*/ 

const PORT = process.env.PORT || 8000;

/*
    Database
*/

const dbConnect = require("./config/database");
const route = require("./routes/blog");
app.use("/",route);
/*
    Server is Listening
*/ 

app.listen(PORT,()=>{
    console.log(`Listening at PORT ${PORT}`);
});

