/*
    Database Connection
*/ 

const mongoose = require('mongoose');

const DB_URL= process.env.DB_URL;

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

module.exports = dbConnect;