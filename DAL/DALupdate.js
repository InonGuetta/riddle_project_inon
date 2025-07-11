import { writeFile } from 'node:fs/promises';
import { Read } from './DALread.js'; 

const path = './../CLIENT/DB/db.txt';

export async function Update(path,new_datas) {
    try {
        const old_data = await Read(); 
        const new_data = old_data + '\n' + JSON.stringify(new_datas); 
        await writeFile(path, new_data, 'utf8'); 
        console.log('the update success');
        return new_data;
    } catch (e) {
        return e.message;
    }
}


export async function insert_db(obj) {
    const full_data = await Update(obj);
}

