const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/user");
const User = require("../models/user");

router.post("/user", async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});
router.get('/user', async (req,res)=>{
    try {
        const user = await User.findAll()
        res.json(user)
    } catch (error) {
        res.json(error)
    }
})

module.exports = router;
