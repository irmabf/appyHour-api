const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const baseController = require("../controllers/base.controller");
const userController = require("../controllers/user.controller");
const tourController = require("../controllers/tour.controller");

module.exports = router;

router.get("/", baseController.index);

// Authentication
router.get(
  "/auth/google",
  //session.isNotAuthenticated,
  userController.doGoogleLogin
);
router.get(
  "/auth/google/callback",
  //session.isNotAuthenticated,
  userController.googleCallback
);

router.post("/login", userController.login);
router.get("/logout", authMiddleware.isAuthenticated, userController.logout);

// Tours
router.post("/tour/new", tourController.create);
router.get("/tour/list", tourController.list);
router.delete("/tour/delete/:id", tourController.delete);
