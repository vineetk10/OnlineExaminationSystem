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
       },
       email: {
        type: String,
        trim: true,
        required: true,
        unique: true
      }
    }
)

module.exports = mongoose.model("User",userSchema);