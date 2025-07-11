import { readFile } from 'fs/promises';


const path = '../CLIENT/DB/db.txt';

export async function show_all() {
    try {
        return await readFile(path, 'utf8');
    } catch (err) {
        console.log('eror its ', err.message);
        return;
    }
}

