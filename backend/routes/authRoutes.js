const express = require("express");
const router = express.Router();

const User = require("../models/User"); // ✅ import model
const { registerUser } = require("../controllers/authController");

router.post("/register", registerUser);

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        res.json({
            message: "Login successful",
            user
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;