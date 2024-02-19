import express from "express"
import { createPost, getPost } from "../controller/PostController.js"

const router = express.Router()

router.get("/:id",getPost)

router.post("/",createPost)

export default router