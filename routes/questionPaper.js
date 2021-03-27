const express = require("express");
const router = express.Router();

const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth");
const {getQuestionPaperById} = require("../controllers/questionPaper");

router.param("questionPaperId", getQuestionPaperById);

module.exports = router;