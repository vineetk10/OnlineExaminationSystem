const QuestionPaper = require("../models/questionPaper");

exports.SavePaperJson = (req,res)=>{
    QuestionPaper.findByIdAndUpdate(
        { _id: req.questionPaper._id },
        { $set: {questionPaperJson: req.body.questionPaperJson} },
        (err, questionPaper) => {
         if (err) {
         return res.status(400).json({
              error: "You are not authorized to update this user"
         });
        }
        res.json(questionPaper);
        }
    )
}