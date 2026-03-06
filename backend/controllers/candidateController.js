const Candidate = require("../models/Candidate");

// Add Candidate
const addCandidate = async (req, res) => {
    try {
        const { name, party } = req.body;

        const candidate = new Candidate({
            name,
            party
        });

        await candidate.save();

        res.status(201).json({
            message: "Candidate added successfully",
            candidate
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Get All Candidates
const getCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.find();

        res.status(200).json(candidates);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Get Winner
const getWinner = async (req, res) => {
    try {
        const winner = await Candidate.findOne().sort({ votes: -1 });

        res.json({
            winner
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Get Results
const getResults = async (req, res) => {
    try {
        const results = await Candidate.find().sort({ votes: -1 });

        res.json(results);   // ✅ FIXED HERE

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Export functions
module.exports = {
    addCandidate,
    getCandidates,
    getWinner,
    getResults
};