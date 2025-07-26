import express from 'express';
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

    router.use((req, res) => {
        res.status(404).json({ msg: "Route not find" });
    });

    app.use('/',router);
}

