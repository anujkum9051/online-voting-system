const express = require("express");
const router = express.Router();

const { addCandidate, getCandidates, getWinner, getResults } = require("../controllers/candidateController");

router.post("/add", addCandidate);
router.get("/", getCandidates);
router.get("/winner", getWinner);
router.get("/results", getResults);

module.exports = router;