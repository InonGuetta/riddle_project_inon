import { createRiddle, fetchAllRiddles, deleteRiddleByQuestion, updateRiddleByQuestion } from "../DAL/riddels.js";

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

        const newRiddle = await createRiddle({ name, taskDescription, correctAnswer });
        res.status(201).json(newRiddle);
    } catch (error) {
        console.error("Error adding riddle:", error.message);
        res.status(500).json({ msg: "Server error. Please try again later." });
    }
}

export async function deleteRiddle(req, res) {
    try {
        const { taskDescription } = req.body;
        if (!taskDescription) {
            return res.status(400).json({ msg: "taskDescription not found" });
        }
        const result = await deleteRiddleByQuestion(taskDescription);
        res.status(200).json({ msg: "riddle deleted success.", deleted: result.deletedCount });
    } catch (error) {
        res.status(500).json({ msg: "server error. please try again later." })
    }
}




export async function updateRiddle(req, res) {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    
    try {
        const { oldTaskDescription, name, newTaskDescription, correctAnswer } = req.body;
        if (!oldTaskDescription || !newTaskDescription) {
            return res.status(400).json({ msg: "taskDescription not found" });
        }

        const newRiddle = await updateRiddleByQuestion(oldTaskDescription, { name, correctAnswer, taskDescription: newTaskDescription });


        res.status(200).json({ msg: "Riddle updated successfully", newRiddle });
    } catch (error) {
        console.error("Error updating riddle,", error.message);
        res.status(500).json({ msg: "server error. please try again later." })
    }
}
