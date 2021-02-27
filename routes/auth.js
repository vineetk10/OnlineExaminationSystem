var express = require('express');
var router = express.Router();
var {signout} = require("../controllers/auth");

router.get('/signout',signout)

module.exports = router;


