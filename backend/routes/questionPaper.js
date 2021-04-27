const express = require("express");
const router = express.Router();

const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth");
const {getQuestionPaperById, getAllQuestionPapers, createQuestionPaper, getQuestionPaper} = require("../controllers/questionPaper");

router.param("questionPaperId", getQuestionPaperById);

router.get("/questionPapers", getAllQuestionPapers);
router.get("/questionPaper/:questionPaperId",getQuestionPaper);

router.post("/questionPaper/create", createQuestionPaper)

module.exports = router;