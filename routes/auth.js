var express = require('express');
var router = express.Router();
var {signout, signup} = require("../controllers/auth");

router.post('/signup',signup);
router.post('/signout',signout);

module.exports = router;


