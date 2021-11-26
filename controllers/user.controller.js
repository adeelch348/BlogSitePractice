const models = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
// require("../nodemon.json");
require("dotenv").config();
// require(__filename + "../")[env];

function signup(req, res) {
  models.User.findOne({ where: { email: req.body.email } })
    .then((result) => {
      if (result) {
        res.status(409).json({
          message: "Email already Exits",
        });
      } else {
        bcryptjs.genSalt(10, function (error, salt) {
          bcryptjs.hash(req.body.password, salt, function (error, hash) {
            const user = {
              name: req.body.name,
              email: req.body.email,
              password: hash,
            };

            models.User.create(user)
              .then((result) => {
                res.status(201).json({
                  message: "User Created Successfully",
                  post: user,
                });
              })
              .catch((error) => {
                res.status(500).json({
                  message: "Something Wrong",
                });
              });
          });
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something Wrong",
      });
    });
}

function login(req, res) {
  models.User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (user === null) {
        res.status(404).json({
          message: "User Not Found",
        });
      } else {
        bcryptjs.compare(req.body.password, user.password, (_error, result) => {
          if (result) {
            const token = jwt.sign(
              {
                email: user.email,
                userId: user.id,
              },
              process.env.JWT_KEY,
              // { expiresIn: "2 seconds" },
              (error, token) => {
                res.status(200).json({
                  message: "Authentication successfully",
                  token: token,
                  name: user.name,
                });
              }
            );
          } else {
            res.status(401).json({
              message: "Invalid Credentials",
            });
          }
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something Wrong",
      });
    });
}

module.exports = {
  signup: signup,
  login: login,
};
