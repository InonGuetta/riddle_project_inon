import { readFile } from 'node:fs/promises';

const path = './../CLIENT/DB/db.txt';


export async function Read() {
    try {
        const content = await readFile(path, 'utf8');
        return content;
    } catch (e) {
        console.log(e.message);
        return;
    }
}