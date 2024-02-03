import express from 'express'

const Auth = async(req,res)=>{
    res.send("Auth Route")
}


const router = express.Router()



router.get("/",Auth)

export default router