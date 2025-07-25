import express from "express";
import { getAllRiddles, addRiddle } from "../controllers/riddles.controllers.js";

const router = express.Router();

router.get("/riddles", getAllRiddles);

router.post("/", addRiddle);

export default router;