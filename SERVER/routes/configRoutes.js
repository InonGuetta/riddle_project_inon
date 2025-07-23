import { getAllRiddles } from '../controllers/riddels.js';

export default function config(app) {

    app.get("/", (req, res) => {
        res.status(200).json({ aaaaa: "Welcome to the Riddle Server!" });
    });

    app.get("/riddles", async (req, res) => {
        console.log("in configRoutes...");

        try {
            await getAllRiddles(req, res);
        } catch (error) {
            console.error("Error in /riddles route:", error);
            res.status(500).json({ error: "Failed to fetch riddles" });
        }
        

        // const riddles = await getAllRiddles();
        // res.json(riddles);
    });

    app.use((req, res) => {
        res.status(404).json({ msg: "Route not find" });
    });
}
