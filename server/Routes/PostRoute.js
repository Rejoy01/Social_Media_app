import express from "express"
import { createPost, deletePost, getPost, getTimeLinePosts, likePost, updatePost } from "../controller/PostController.js"

const router = express.Router()

router.get("/:id",getPost)

router.post("/",createPost)

router.put("/:id",updatePost)

router.delete("/:id",deletePost)

router.put("/like/:id",likePost)

router.get("/timeline/:id",getTimeLinePosts)

export default router