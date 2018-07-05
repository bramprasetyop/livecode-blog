const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require("bcryptjs");

let userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: "Username is required"
  },

  password: {
    type: String,
    required: "Password is required"
  },
}, {
  timestamps: true
});

userSchema.pre("save", function (next) {
  var user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

userSchema.statics.checkUsernameDuplication = function (username) {
  return this.findOne({
      username
    })
    .then(user => {
      if (user) return {
        username: 'Username already exists'
      };
      return null;
    })
    .catch(err => {
      throw err;
    });
};



const User = mongoose.model("User_blog_livecode", userSchema);

module.exports = User;