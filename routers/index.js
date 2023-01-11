const express = require("express");
const router = express.Router();
const { authentication } = require("../middleware/authentication");

const UserController = require("../controllers/userController");

router.post("/users/register", UserController.register);
router.post("/users/login", UserController.login)
router.use(authentication)
router.get("/users/username", UserController.userName)
router.get("/users/profile", UserController.profile)
router.post("/users/paymentToken", UserController.midtrans)
router.patch("/users/subscription", UserController.subscription)
router.get("/users/planetsInfo", UserController.planetsInfo)
module.exports = router;
