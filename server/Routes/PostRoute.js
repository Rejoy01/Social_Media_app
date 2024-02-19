import express from "express"
import { createPost, getPost, updatePost } from "../controller/PostController.js"

const router = express.Router()

router.get("/:id",getPost)

router.post("/",createPost)

router.put("/:id",updatePost)

export default router