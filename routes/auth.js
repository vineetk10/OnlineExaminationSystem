var express = require('express');
var router = express.Router();
var {signout, signup} = require("../controllers/auth");
const { check , validationResult } = require('express-validator');

router.post('/signup',[
    check("firstName","name should be at least 3 characters").isLength({ min: 3 }),
    check("email","email is incorrect").isEmail(),
    check("password")
        .isLength({ min: 6 })
        .withMessage('password must be at least 6 chars long')
        .matches(/\d/)
        .withMessage('must contain a number')
],
signup);
router.post('/signout',signout);

module.exports = router;


