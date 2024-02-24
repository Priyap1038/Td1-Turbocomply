const express = require("express");
const { connection } = require("./db");
const { Router } = require("./routes/commit.routes");

const app= express.Router();

app.listen("/commit",Router);

app.listen(PORT,async(req,res)=>{
try {
   await connection;
//    res.status(201).send("database is connected");
console.log("conection succesfull")
} catch (error) {
    console.log("error")
}
})