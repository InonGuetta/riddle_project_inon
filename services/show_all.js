import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function show_all() {
    const filePath = path.join(__dirname, '../DB/db.txt');
    try {
        const data = await readFile(filePath, 'utf8');
        // console.log(data);
        return data;
    } catch (err) {
        console.log('eror its ', err.message);
        return;
    }
}