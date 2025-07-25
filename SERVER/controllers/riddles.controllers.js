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
        const { id, name, taskDescription, correctAnswer } = req.body;
        // אפשרות: לוודא שכל השדות קיימים
        if (!id || !name || !taskDescription || !correctAnswer) {
            return res.status(400).json({ msg: "Missing fields in riddle" });
        }
        const newRiddle = { id, name, taskDescription, correctAnswer };
        const insertedId = await createRiddle(newRiddle);
        res.status(201).json({ msg: "Riddle created", id: insertedId });
    } catch (error) {
        console.error("Error adding riddle:", error.message);
        res.status(500).json({ msg: "Server error. Please try again later." });
    }
}
