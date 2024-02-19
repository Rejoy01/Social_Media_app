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

// Get a Post

export const getPost = async(req,res)=> {
    const id = req.params.id

    try {
        const Post = await PostModel.findById(id)
        res.status(200).json(Post)
        
    } catch (error) {
        res.status(500).json(error)
    }
}

//update post

export const  updatePost = async(req,res)=>{
    const id =  req.params.id
    try{
        const post = await PostModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(post)
    }catch(error){
        res.status(500).json(error)
    }
    

}