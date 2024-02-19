import express from "express"
import { createPost } from "../controller/PostController.js"

const router = express.Router()

router.get("/",async(req,res)=>{
    res.send("Post Route")
})

router.post("/",createPost)

export default router