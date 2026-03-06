const express = require("express");
const cors = require("cors"); // ✅ added
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const candidateRoutes = require("./routes/candidateRoutes");
const voteRoutes = require("./routes/voteRoutes");

const app = express();   // create app FIRST

connectDB();

// Middleware
app.use(cors()); // ✅ allow frontend requests
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/candidates", candidateRoutes);
app.use("/api/vote", voteRoutes);

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Online Voting System Server Running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});