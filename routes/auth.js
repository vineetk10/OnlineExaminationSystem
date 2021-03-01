var express = require('express');
var router = express.Router();
var {signout, signup} = require("../controllers/auth");

router.get('/signup',signup);
router.get('/signout',signout);

module.exports = router;


