import { config } from "dotenv"
import { MongoClient, Db } from "mongodb"
config()

const client = new MongoClient(process.env.URL_MONGO)

/**
 * @type {Db | null}
 */
let db = null;

/**
 * @returns {Promise<Db>}
 */

export async function connect() {
    if (!db) {
        await client.connect()
        db = client.db("db");
        console.log("Connected to MongoDB");
    }
    return db;
}
