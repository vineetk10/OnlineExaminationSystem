const express = require("express");
const router = express.Router();

const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth");
const {getQuestionPaperById, getAllQuestionPapers, createQuestionPaper} = require("../controllers/questionPaper");

router.param("questionPaperId", getQuestionPaperById);
router.get("/questionPapers", getAllQuestionPapers);

router.post("/questionPaper/create", createQuestionPaper)
module.exports = router;