import express from "express";

import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

/*router.get("/checkauthentication", verifyToken,(req,res,next)=>{
    res.send("logged in successfully!")
}) 

router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
  res.send("logged in successfully and you can delete your account!")
}) 

router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
  res.send("Hello admin, logged in successfully and you can delete your accounts !")
}) */



//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;