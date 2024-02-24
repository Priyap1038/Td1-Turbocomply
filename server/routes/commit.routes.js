const express = require("express");
const { Commitmodel } = require("../models/commit.model");

const Router = express.Router();

Router.post("/create",async(req,res)=>{
    const {message,author,timestamp,repo} = req.body;
try {
    let newCommit = new Commitmodel(req.body);
    newCommit.save();
    res.status(201).send({message:"New commit added"},{newCommit})
} catch (error) {
    res.status(401).send({message:error});
}
})

Router.delete("/delete",async(req,res)=>{
    const {id}= req.body;
    try {
        let existing = await Commitmodel.find({id});

        if(existing){
            const commit = await Commitmodel.find(); 
        }
    } catch (error) {
        res.status(401).send({message:error})
    }
})

module.exports = {Router};