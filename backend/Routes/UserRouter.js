const express = require("express");
const router = express.Router();
const { create_user, get_user } = require("../controllers/user");

router.post("/user", create_user)

router.get('/user', get_user)


module.exports = router;
