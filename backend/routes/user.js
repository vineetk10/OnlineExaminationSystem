const express = require("express")
const router = express.Router();

const{getUserById,getUser,updateUser,getAllUsers}= require("../controllers/user");
const{ isAunthenticated,isSignedIn,isAdmin }= require("../controllers/auth");

router.param("userId",getUserById);

router.get("/GetAllUsers",getAllUsers);
// router.get("/user/:userId",isSignedIn,isAunthenticated, getUser);
// router.put("/user/:userId",isSignedIn,isAunthenticated, updateUser);


module.exports = router;
