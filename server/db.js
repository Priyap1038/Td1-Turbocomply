const { configDotenv } = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");


const connection= ()=>{
    let mongoURL= `mongodb+srv://priyap1038:priya1038@cluster0.piul0rf.mongodb.net/commits?retryWrites=true&w=majority&appName=Cluster0`
    mongoose.connection(mongoURL);
}

module.exports = {connection};