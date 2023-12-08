const express = require("express");
const { createPreference, webhook, getAllPurchase,} = require("../controllers/purchase");
const { authenticate } = require("../middleware/authenticate");
const router = express.Router();

router.post("/create_preference", createPreference);

router.post("/webhook", webhook);

router.get("/purchase",authenticate, getAllPurchase);

module.exports = router;
