import express from 'express'
import { loginUser, registeruser } from '../controller/AuthController.js'

const Auth = async(req,res)=>{
    res.send("Auth Route")
}


const router = express.Router()



router.get("/",Auth)
router.post("/register",registeruser)
router.post("/Login",loginUser)
export default router