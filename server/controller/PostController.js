import PostModel from "../model/postModel.js";
import mongoose from "mongoose";

//create new post

export const createPost = async(req,res)=>{
    const newPost = new PostModel(req.body) 

    try {
        await newPost.save();
        res.status(200).json("Post Created")
    } catch (error) {
        res.status(500).json(error)
    }

}