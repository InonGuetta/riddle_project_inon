import { writeFile } from 'node:fs/promises';

const path = './../CLIENT/DB/db.txt';


export async function Create(newdata) {
    try {
        await writeFile(path, JSON.stringify(newdata), 'utf8');
        console.log('the data transfor success');
        return;
    } catch (err) {
        return err.message
    }
}


