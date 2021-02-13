var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
    {
      name: {
          firstName,lastName: {
            type: String,
            required: true,
            maxlength: 32,
            trim: true
          }
      },
       email: {
        type: String,
        trim: true,
        required: true,
        unique: true
      },
      encry_password: {
        type: String,
        required: true
      },
      salt: String
    }
)

userSchema.virtual('fullName').
  get(function() {
    return this.name.firstName + ' ' + this.name.lastName;
   }).
  set(function(v) {
    this.name.firstName = v.substr(0, v.indexOf(' '));
    this.name.lastName = v.substr(v.indexOf(' ') + 1);
  });

userSchema.method = {
  securePassword: function(plainpassword){
    if(plainpassword=="")
      return "";
    try {
      const secret = this.salt;
      return crypto.createHmac('sha256', secret)
                   .update(plainpassword)
                   .digest('hex');
    } catch (error) {
      return "";
    }
  }
}

module.exports = mongoose.model("User",userSchema);