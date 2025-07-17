import { readFile } from 'fs/promises';

const path = '../CLIENT/DB/db.txt';

export async function show_all() {
    try {
        let data_player = await readFile(path, 'utf8');
        data_player = JSON.parse(data_player)
        return data_player; 
    } catch (err) {
        console.log('eror its ', err.message);
        return;
    }
}