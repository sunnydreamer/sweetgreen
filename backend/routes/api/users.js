// IMPORT EXPRESS IN ORDER TO CREATE ROUTERS
const express = require("express");

// IMPORT USER CONTROLLER
const userController = require("../../controllers/api/userController");

// Use express to create a router
const router = express.Router();

// Use the router to redirect to different controller depending on the method
router.route("/").post(userController.createUser);
router.route("/login").post(userController.login);
router.route("/:id").get(userController.getUser);
router.route("/").get(userController.getAllUser);

// EXPORT ROUTER TO BE USED IN OTHER PARTS OF OUR APPLICATION
module.exports = router;
