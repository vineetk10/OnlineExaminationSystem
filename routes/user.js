const express = require("express")
const router = express.Router();

const{getUserById,getUser,updateUser}= require("../controllers/user");
const{ isAunthenticated,isSignedIn,isAdmin }= require("../controllers/auth");

router.param("userId",getUserById);

router.get("/user/:userId",isSignedIn,isAunthenticated, getUser);
router.put("/user/:userId",isSignedIn,isAunthenticated, updateUser);

module.exports = router;
