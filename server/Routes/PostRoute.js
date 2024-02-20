import express from "express"
import { createPost, deletePost, getPost, updatePost } from "../controller/PostController.js"

const router = express.Router()

router.get("/:id",getPost)

router.post("/",createPost)

router.put("/:id",updatePost)

router.delete("/:id",deletePost)

export default router