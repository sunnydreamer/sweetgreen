// IMPORT EXPRESS IN ORDER TO CREATE ROUTERS
const express = require("express");

// IMPORT USER CONTROLLER
const dishController = require("../../controllers/api/dishController");

// Use express to create a router
const router = express.Router();

// Use the router to redirect to different controller depending on the method
router.route("/seed").post(dishController.seedDish);
router.route("/").get(dishController.getAllDishes);
router.route("/").post(dishController.createOneDish);
router.route("/:id").delete(dishController.deleteDish);
router.route("/:category").get(dishController.getCategory);
router.route("/:category/:id").get(dishController.getOneDish);
router.route("/:category/:id").put(dishController.updateDish);

// EXPORT ROUTER TO BE USED IN OTHER PARTS OF OUR APPLICATION
module.exports = router;
