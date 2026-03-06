const User = require("../models/User");
const Candidate = require("../models/Candidate");

const voteCandidate = async (req, res) => {
    try {
        const { userId, candidateId } = req.body;

        const user = await User.findById(userId);

        if (user.hasVoted) {
            return res.status(400).json({ message: "User has already voted" });
        }

        const candidate = await Candidate.findById(candidateId);

        candidate.votes += 1;
        await candidate.save();

        user.hasVoted = true;
        await user.save();

        res.json({
            message: "Vote cast successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { voteCandidate };