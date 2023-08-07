const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const matches = require("./routes/matches");



//Loading env vars
dotenv.config();

//Setting the database
mongoose.connect(process.env.DB_URI,{useUnifiedTopology:true});
const db = mongoose.connection;
db.on('error',(error)=>console.log(error));
db.once('open',()=>console.log("DB Connected"));

//Initiating the app
const app = express();

// Body parser
app.use(express.json());


app.use("/api/matches",matches);


app.listen(process.env.PORT||4000,()=>{
    console.log("App running");
})