import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://rejowilson:RejoyWilSon@cluster0.harjfus.mongodb.net/SocialMedia?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => app.listen(5000, () => console.log("listening")))
  .catch(() => console.log("error in connecting db"));
