import express from "express";
import dotenv from "dotenv";
import configRoutes from "./routes/configRoutes.js";
import sequelize from './config/db.config.js';
import toPlayers from "./routes/players.routes.js";


dotenv.config();

const server = express();
server.use(express.json());
configRoutes(server);
await sequelize.sync();
toPlayers(server);


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("Server running on port", PORT);
});