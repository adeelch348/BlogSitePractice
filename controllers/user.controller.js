const models = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

module.exports = {
  signup: signup,
};
