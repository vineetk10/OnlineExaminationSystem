const express = require("express");
const router = express.Router();

const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth");
const {} = require("../controllers/questionPaper");

router.param("questionPaper", getQuestionPaperById);

module.exports = router;