import express from "express";
import { getAllRiddles, addRiddle } from "../controllers/riddles.controllers.js";

const router = express.Router();

router.get("/riddles", getAllRiddles);
// not working
router.post("/add-riddle", addRiddle);


export default router;