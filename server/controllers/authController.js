import User from "../models/User.js";
import bcrypt from "bcryptjs"
const addUser = async (req, res) => {
        try {
        const { fullName,userName,email,password,bio,profilePicture} =req.body 
        const salt =await bcrypt.genSalt(10)
        const hashedPassword =await bcrypt.hash(password,salt)
        const user = await User.create({ fullName,userName,email,password:hashedPassword,bio,profilePicture})
        res.status(201).json(user);
        } catch (error) {
          res.status(500).json(error);
        }
}
const getUser =async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).send("User not found!");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(403).send("Invalid password!");
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}


export {addUser,getUser}      