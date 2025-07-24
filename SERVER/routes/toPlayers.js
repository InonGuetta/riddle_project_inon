
// הקוד הישן שעבד הוא מכאן 
// import express from 'express';
// import { getAllRiddles } from '../controllers/riddels.js';
// import Player from '../models/player.model.js';

// export default function config(app) {

//     const router = express.Router();

//     app.post('/players', async (req, res) => {
//         const { id, name, average_time_seconds } = req.body;
//         try {
//             const newPlayer = await Player.create({ id, name, average_time_seconds });
//             res.status(201).json({ message: 'Player added', player: newPlayer });
//             return'';
//         } catch (error) {
//             console.error('Error inserting player:', error.message);
//             res.status(500).json({ message: 'Failed to insert player' });
//             return'';
//         }
//     });




//     app.get("/", (req, res) => {
//         res.status(200).json({ aaaaa: "Welcome to the Riddle Server!" });
//     });

//     app.get("/riddles", async (req, res) => {
//         console.log("in configRoutes...");

//         try {
//             await getAllRiddles(req, res);
//         } catch (error) {
//             console.error("Error in /riddles route:", error);
//             res.status(500).json({ error: "Failed to fetch riddles" });
//         }
//     });


//     app.use((req, res) => {
//         res.status(404).json({ msg: "Route not find" });
//     });
// }
// עד לכאן 


import express from 'express';
import { getAllRiddles } from '../controllers/riddels.js';
import Player from '../models/player.model.js';

export default function config(app) {

    const router = express.Router();

    router.post('/players', async (req, res) => {
        const { id, name, average_time_seconds } = req.body;
        try {
            const newPlayer = await Player.create({ id, name, average_time_seconds });
            res.status(201).json({ message: 'Player added', player: newPlayer });
            return'';
        } catch (error) {
            console.error('Error inserting player:', error.message);
            res.status(500).json({ message: 'Failed to insert player' });
            return'';
        }
    });


    router.get("/", (req, res) => {
        res.status(200).json({ aaaaa: "Welcome to the Riddle Server!" });
    });

    router.get("/riddles", async (req, res) => {
        console.log("in configRoutes...");

        try {
            await getAllRiddles(req, res);
        } catch (error) {
            console.error("Error in /riddles route:", error);
            res.status(500).json({ error: "Failed to fetch riddles" });
        }
    });


    router.use((req, res) => {
        res.status(404).json({ msg: "Route not find" });
    });

    app.use('/',router);
}

