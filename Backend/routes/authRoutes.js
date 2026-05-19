 const express = require("express");
const { signup, login, logout, getUser } = require("../controllers/AuthControllers");
const verifyToken = require("../middlewares/authMiddleware");
 const router=express.Router()
 
router.post("/signup",signup)
router.post('/login',login)
router.get("/logout",logout)
router.get("/get-me",verifyToken,getUser)

module.exports=router