const Project = require("../models/projectmodel");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();

const createToken = (_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:"3d"})
}
const project = async(req,res)=>{
    const { projectname,
        description,
        startDate,
        endDate}=req.body;

        try{
            const project = await Project.createproject(projectname,description,startDate,endDate);
            const token = createToken(project._id);
            res.status(200).json({projectname,token});
        }catch(error){
            res.status(400).json({error: error.message});
        }
}

module.exports ={
    project
    
}