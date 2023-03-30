import express from "express";

import {addUser,getUser} from '../controllers/authController.js'
const router = express.Router();

router.route("/register").post(addUser);
router.route("/login").post(getUser);





export default router;
