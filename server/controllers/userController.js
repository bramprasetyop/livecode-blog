const  User = require("../model/userModel");
const bcrypt = require("bcryptjs");

// ============= tambahan npm install --save express-validator =========

const { check, validationResult } = require("express-validator/check");
var jwt = require("jsonwebtoken");

// ============= tambahan npm install --save express-validator =========

function signUpUser(req, res) {
  // ============ add validations ============
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  // ============ add validations ============

  let objUser = {
    username: req.body.username,
    password: req.body.password
  };

  User.create(objUser)
    .then(users => {
      res.status(200).json({ message: "Signup success", users });
    })
    .catch(error => {
      res.status(400).json({ message: "Signup error", error });
    });
}

function loginUser(req, res) {

  let pass = req.body.password;


  User.findOne({username:req.body.username})
    .then(user => {
      // console.log('=============',user);
      let compare = bcrypt.compareSync(pass, user.password);

      if (compare) {
        jwt.sign(
          { username: user.username},
          process.env.SECRET_KEY,
          (err, token) => {
            console.log(token);
            
            res.status(200).json({ message: 'Logged In Successfully', token});
          }
        );
      }
    })
    .catch(error => {
      res.status(400).json({ message: "Wrong username/password", error });
    });
}

function getUser(req, res) {
  User.find()
    .then(users => {
      res.status(200).json({
        message: 'get Article',
        users
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'failed',
        err
      })
    })
}


module.exports = {
  signUpUser,
  loginUser,
  getUser
};