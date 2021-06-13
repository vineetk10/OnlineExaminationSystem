const UserResponse = require("../models/userResponse");

exports.SavePaperResponse = (req,res)=>{
    const userResponse = req.body;
    UserResponse.updateOne(
        {
           "createdBy": userResponse.createdBy,
           "questionPaperId": userResponse.questionPaperId
        },
        {
           "$addToSet": { responses: {"questionPaperJsonResponse":userResponse.responses }},
           "$set":{
              "createdBy": userResponse.createdBy,
              "questionPaperId": userResponse.questionPaperId
           }
        },
        {
           "upsert":true
        },
        (err, userResponse) => {
            if (err) {
            return res.status(400).json({
                 error: err.message
            });
           }
           res.json(userResponse);
           }
        )
}