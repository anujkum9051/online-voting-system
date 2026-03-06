const express = require("express");
const router = express.Router();

const { voteCandidate } = require("../controllers/voteController");

router.post("/vote", voteCandidate);

module.exports = router;