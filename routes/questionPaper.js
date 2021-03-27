const express = require("express");
const router = express.Router();

const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth");
const {getQuestionPaperById,getAllQuestionPapers} = require("../controllers/questionPaper");

router.param("questionPaperId", getQuestionPaperById);
router.get("/questionPapers", getAllQuestionPapers);

module.exports = router;