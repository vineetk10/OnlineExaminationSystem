var express = require('express');
var router = express.Router();
var {signout, signup ,signin, isSignedIn, forgotPasswordLink,resetPassword} = require("../controllers/auth");
var {getUserById} = require("./contollers/user");
const { check , validationResult } = require('express-validator');

router.param("userId",getUserById);

router.post('/signup',[
    check("firstName","name should be at least 3 characters").isLength({ min: 3 }),
    check("lastName","name should be at least 3 characters").isLength({ min: 3 }),
    check("email","email is incorrect").isEmail(),
    check("password")
        .isLength({ min: 6 })
        .withMessage('password must be at least 6 chars long')
        .matches(/\d/)
        .withMessage('must contain a number')
],
signup);

router.post('/signin',[
    check("email","please enter a valid email").isEmail(),
    check("password")
        .isLength({ min: 1 })
        .withMessage('please enter a password')
],
signin);

router.post('/signout',signout);

router.post('/forgotpasswordlink',[
    check("email","please enter a valid email").isEmail()
],
forgotPasswordLink);

router.put('/:userId/resetpassword',resetPassword)

router.get('/testroute',isSignedIn,(req,res)=>{
    res.json(req.auth) 
    // will print {auth: { "_id":""}}
});

module.exports = router;


