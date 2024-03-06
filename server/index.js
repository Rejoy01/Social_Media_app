import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotevn from 'dotenv'
import cors from "cors";
//routes
import AuthRoute from './Routes/AuthRoutes.js'
import UserRoute from './Routes/UserRoutes.js'
import PostRoute from './Routes/PostRoute.js'

const PORT = process.env.PORT
const app = express();



//middleware
app.use(cors())
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
dotevn.config()

mongoose
  .connect(
    process.env.MONGO_DB
  )
  .then(() => app.listen(process.env.PORT, () => console.log(`listening at ${process.env.PORT}`)))
  .catch((error)=>console.log(error))

  //usage of route
  
app.use('/auth',AuthRoute)

app.use("/user",UserRoute)

app.use("/post",PostRoute)


