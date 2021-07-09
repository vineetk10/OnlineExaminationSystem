const User  = require("../models/user");

exports.getUserById = (req,res,next,id) => {
  User.findById(id).exec((err,user) => {
    if(err || !user){
      return res.status(400).json({
        error:"No user found in DB"
      })
    }
    req.profile = user;
    next();
  })
}

exports.getAllUsers = (req,res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 8;
        let sortBy = req.query.sortBy ? parseInt(req.query.sortBy) : "_id";

        return User.find()
            .sort([[sortBy, "asc"]])
            .limit(limit)
            .exec()
            .then((users) => {
                return res.json(users);
            })
            .catch(error=>{
                return {
                    error: "No User Found"
                };
            })
}

exports.getUser = (req,res) => {
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  req.profile.createdOn = undefined;
  req.profile.createdAt = undefined;
  return res.json(req.profile);
}

exports.updateUser = (req,res) => {
  User.findByIdAndUpdate(
    {_id : req.profile._id},
    {$set : req.body},
    {new: true, useFindAndModify: false},
    (err,user) => {
      if(err){
        return res.status(400).json({
          error: "Upddating the DB is not successful"
        })
      }
      user.salt = undefined;
      user.encry_password = undefined;
      user.createdOn = undefined;
      user.createdAt = undefined;
       res.json(user);
    }
    )
}