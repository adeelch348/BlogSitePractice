const express = require("express");
const postsController = require("../controllers/post.controller");
const checkAuthMiddleware = require("../middleware/checkauth");
const router = express.Router();

router.post("/", checkAuthMiddleware.checkAuth, postsController.save);
router.get("/:id", postsController.show);
router.get("/", postsController.index);
router.patch("/:id", checkAuthMiddleware.checkAuth, postsController.update);
router.delete("/:id", checkAuthMiddleware.checkAuth, postsController.destroy);

module.exports = router;
