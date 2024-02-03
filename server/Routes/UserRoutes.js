import express from "express";
import { GetUser, updateUser } from "../controller/UserController.js";

const router = express.Router()

router.get("/",async(req,res)=>{
    res.send("user Route")
})

router.get('/:id',GetUser)
router.put('/:id',updateUser)

export default router