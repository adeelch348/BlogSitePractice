const express = require("express");
const userController = require("../controllers/user.controller");
const postsController = require("../controllers/user.controller");

const router = express.Router();

router.post("/sign-up", userController.signup);
// router.get("/:id", postsController.show);
// router.get("/", postsController.index);
// router.patch("/:id", postsController.update);
// router.delete("/:id", postsController.destroy);

module.exports = router;
