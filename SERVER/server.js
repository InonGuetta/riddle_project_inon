import express from 'express';
const server = express();
const PORT = process.env.PORT || 3000;
import configRoutes from "./routes/configRoutes.js";


server.use(express.json());
configRoutes(server);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});