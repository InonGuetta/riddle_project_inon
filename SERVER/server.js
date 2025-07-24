import express from 'express';
const PORT = process.env.PORT || 3000;
import toPlayers from "./routes/toPlayers.js";
import sequelize from './config/db.config.js';

const server = express();

server.use(express.json());
await sequelize.sync();
toPlayers(server);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});