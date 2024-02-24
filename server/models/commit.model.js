const express = require("express");
const { mongoose, Schema } = require("mongoose");

const CommitSchema = mongoose.Schema({
    message:{type:String,require:true},
    author:{type:String,require:true},
    timestamp:{createdAt: Date.now()},
    repo:{type:String,require:true},
    commit_id:{type:number}
}) ;

const Commitmodel = mongoose.Model("commit",CommitSchema);

module.exports = {Commitmodel};