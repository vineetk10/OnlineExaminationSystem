var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
    {
       firstName: {
           type: String,
           required: true,
           maxlength: 32,
           trim: true
       },
       lastName: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
       } 
    }
)

module.exports = mongoose.model("User",userSchema);