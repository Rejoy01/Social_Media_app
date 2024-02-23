import PostModel from "../model/postModel.js";
import UserModel from "../model/UserModel.js";
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
    const {userId} = req.body
    try{
        const post = await PostModel.findById(id)
        if (post.userId === userId) {
            await post.updateOne({$set :req.body})
            res.status(200).json(post)
        }else{
            res.status(403).json("Action forbidden")
        }
        
    }catch(error){
        res.status(500).json(error)
    }
}

export const deletePost =async(req,res)=>{
    const id= req.params.id;
    const {userId} = req.body
    try {
        const post = await PostModel.findById(id)
        if (post.userId === userId) {
            await post.deleteOne();
            res.status(200).json("post deleted Successfully")
        }else{
            res.status(403).json("Action forbidden")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// like and dislike a post

export const likePost =async(req,res)=>{
    const id = req.params.id;
    const {userId} = req.body
    try {
        const Post = await PostModel.findById(id);
        const CheckLike = Post.likes.includes(userId)
        if (!CheckLike) {
            await Post.updateOne({$push:{likes:userId}})
            res.status(200).json("post liked ")
        }else{
            await Post.updateOne({$pull:{likes:userId}})
            res.status(200).json("post Disliked ")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// get Timeline Posts

export const getTimeLinePosts = async(req, res)=>{
    const userId = req.params.id

    try {
        const currentUserPost = await PostModel.find({userId:userId})
        //aggreation pipeline contains array of steps
        //1st step is matching step
        const FollowingPost = await UserModel.aggregate([
            {
                $match:{
                    //convert userId to ObjectId Type
                    _id : new mongoose.Types.ObjectId(userId)
                }
        
            },
            {   
                //query inside userModel ANd results from postModel
                //integrate PostModel while remaining inside the user model
                $lookup:{
                    from:"posts",
                    localField:"following",
                    foreignField:"userId",
                    as: "followingPosts"
                }
            },
            {
                //which fields to return as the result of aggreation
                $project:{
                    followingPosts:1,
                    _id : 0

                }
            }
        ])
        res.status(200).json(currentUserPost.concat(FollowingPost))
        
    } catch (error) {
        res.status(500).json(error)
    }
}