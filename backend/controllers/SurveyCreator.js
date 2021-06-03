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

exports.GetPaperJson = (req,res)=>{
    QuestionPaper.find({_id:req.questionPaper._id})
    .select("questionPaperJson")
    .exec((error,paperJson)=>{
        if(error)
        {
        return res.status(400).json({
            error: "No Question Paper Json Found"
        })
    }
    return res.json(paperJson);
    })
}