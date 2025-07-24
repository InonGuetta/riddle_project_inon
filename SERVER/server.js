// import express from 'express';
// // הport שאני צריך על מנת להתחבר לשרת
// const PORT = process.env.PORT || 3000;
// // ייבוא הקוד של toPlayrs.js מהראוט 
// // כדי שנוכל להשתמש בנתיב הנכון של השליחה לשרת
// import toPlayers from "./routes/toPlayers.js";
// // הקובץ שמכיל את הקונפוגרציה הנכונה של איך לשלוח לשרת 
// import sequelize from './config/db.config.js';

// // הפעלת השרת ע"י שימוש במתודה express 
// const server = express();

// // יצירת המידל וואר עבור שיוכל להשתמש בקבלת קבצי json כלומר בקבלת אובייקטים  
// server.use(express.json());
// // הוא משתמש עבור יצירת המיקום של ה db והתוצרה הנכונה שלו 
// await sequelize.sync();

// toPlayers(server);

// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

import express from "express";
import dotenv from "dotenv";
import configRoutes from "./routes/configRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
configRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});