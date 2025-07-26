import { fetchAllRiddles } from '../services/riddles.service.js';

export const getAllRiddles = async (req, res) => {
    if (!res) {
        throw new Error("Response object 'res' is undefined. Make sure to use getAllRiddles as an Express route handler, e.g., app.get('/riddles', getAllRiddles)");
    }

    try {
        const riddles = [
            {
                id: 1,
                name: "Riddle 1",
                taskDescription: "What has keys but can't open locks?",
                correctAnswer: "A piano"
            },

        ]

        console.log("==================== Fetching all riddles...");

        res.status(200).json(riddles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};