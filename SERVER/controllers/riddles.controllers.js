import { createRiddle, fetchAllRiddles } from "../DAL/riddels.js";

export async function getAllRiddles(req, res) {
    try {
        const data = await fetchAllRiddles();
        res.json(data);
    } catch (error) {
        console.error("Error getting riddles:", error.message);
        res.status(500).json({ msg: "Server error. Please try again later." });
    }
}

export async function addRiddle(req, res) {
    try {
        const { name, taskDescription, correctAnswer } = req.body;
        if (!name || !taskDescription || !correctAnswer) {
            return res.status(400).json({ msg: "All fields are required." });
        }

        const newRiddle = await createRiddle({ name, taskDescription, correctAnswer});
        res.status(201).json(newRiddle);
    } catch (error) {
        console.error("Error adding riddle:", error.message);
        res.status(500).json({ msg: "Server error. Please try again later." });
    }
}
