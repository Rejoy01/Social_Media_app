import express from 'express'
import { registeruser } from '../controller/AuthController.js'

const Auth = async(req,res)=>{
    res.send("Auth Route")
}


const router = express.Router()



router.get("/",Auth)
router.post("/register",registeruser)
export default router