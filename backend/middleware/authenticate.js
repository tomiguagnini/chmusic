const { secretKey } = require("../config/variables");
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ error: "Forbidden" });
        }

        req.user = user;
        next();
    });
};

module.exports = {
    authenticate,
};
