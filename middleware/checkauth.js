const jwt = require("jsonwebtoken");
require("dotenv").config();
function checkAuth(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedtoken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decodedtoken;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expire token",
      error: error,
    });
  }
}

module.exports = {
  checkAuth: checkAuth,
};
