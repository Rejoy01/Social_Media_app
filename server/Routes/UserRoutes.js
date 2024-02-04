import express from "express";
import { GetUser, deleteUser, followUser, updateUser } from "../controller/UserController.js";

const router = express.Router()

router.get("/",async(req,res)=>{
    res.send("user Route")
})

router.get('/:id',GetUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)
router.put('/:id/follow',followUser)

export default router