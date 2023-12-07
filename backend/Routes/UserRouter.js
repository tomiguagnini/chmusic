const express = require("express");
const router = express.Router();
const { create_user, get_user, login } = require("../controllers/user");

router.post("/user", create_user)

router.get('/user', get_user)

router.post("/login",login)

module.exports = router;
