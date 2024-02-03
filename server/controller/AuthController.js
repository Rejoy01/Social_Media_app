import UserModel from "../model/UserModel.js";
import bcrpyt, { compare } from "bcrypt";

// registering a new user
export const registeruser = async (req, res) => {
  const { username, password, firstname, lastname } = req.body;

  const salt = await bcrpyt.genSalt(10);
  const hashedPass = await bcrpyt.hash(password, salt);

  const newUser = new UserModel({
    username,
    password: hashedPass,
    firstname,
    lastname,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//login User 

export const loginUser = async(req,res)=>{

  const{username,password} = req.body

  try {

    const user = await UserModel.findOne({username:username})
    if(user){

      const validate = await bcrpyt.compare(password,user.password)

      validate ? res.status(200).json(user) : res.status(404).json("Wrong Password")

    }
    else{
      res.status(404).json('No User Found')
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}