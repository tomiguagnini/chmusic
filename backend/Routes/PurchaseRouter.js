const express = require("express");
const { createPreference, webhook, getAllPurchase,} = require("../controllers/purchase");
const router = express.Router();

router.post("/create_preference", createPreference);

router.post("/webhook", webhook);

router.get("/purchase", getAllPurchase);

module.exports = router;
