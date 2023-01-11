const express = require("express");
const router = express.Router();
//const { authentication } = require("../p2-iproject-server2/middleware/authentication");

const UserController = require("../controllers/userController");

router.post("/users/register", UserController.register);


module.exports = router;
