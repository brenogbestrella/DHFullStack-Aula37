const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

/* GET users listing. */
router.get("/", UserController.indexAll);
router.post("/", UserController.store);

module.exports = router;
