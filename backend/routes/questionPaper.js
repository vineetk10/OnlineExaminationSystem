const express = require("express");
const router = express.Router();

const{getUserById}= require("../controllers/user");
const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth");
const {getQuestionPaperById, getAllQuestionPapers, createQuestionPaper, getQuestionPaper, deleteQuestionPaper,updateQuestionPaper} = require("../controllers/questionPaper");
const {SavePaperJson,GetPaperJson} = require("../controllers/SurveyCreator")
router.param("questionPaperId", getQuestionPaperById);
router.param("userId",getUserById);

router.post("/questionPapers/:userId",isSignedIn,isAuthenticated, getAllQuestionPapers);
router.get("/questionPaper/:questionPaperId",getQuestionPaper);

router.post("/questionPaper/create", createQuestionPaper)
router.put("/questionPaper/update/:questionPaperId", updateQuestionPaper)

router.delete("/questionPaper/deleteQuestionPaper", deleteQuestionPaper)

router.post("/questionPaper/SavePaperJson/:questionPaperId",SavePaperJson);
router.get("/questionPaper/GetPaperJson/:questionPaperId",GetPaperJson);
module.exports = router;