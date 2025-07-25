import { connect } from "../config/mongo.config.js"
const db = await connect()

export async function fetchAllRiddles() {
    try {
        const data = await db.collection("riddles").find().toArray()
        console.log(data);
        return data
    } catch (err) {
        console.log(`your err is: ${err}`);
        throw new Error("Could not retrieve readdles from the database")
    }
}

export async function createRiddle(riddle) {
    try {
        const result = await db.collection("riddles").insertOne(riddle);
        return result.insertedId; // או תחזיר את האובייקט אם תרצה
    } catch (err) {
        console.error(`Error creating riddle: ${err}`);
        throw new Error("Could not insert new riddle");
    }
}
