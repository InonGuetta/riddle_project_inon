import { writeFile } from 'node:fs/promises';
import { Read } from './DALread.js'; 

const path = './../CLIENT/DB/db.txt';

export async function Update(new_data) {
    try {
        const data = await Read();
        const data_json = JSON.parse(data);
        // const new_data = old_data + '\n' + JSON.stringify(new_datas); 
        data_json.push(new_data);
        await writeFile(path, JSON.stringify(data_json), 'utf8'); 
        console.log('the update success');
        return new_data;
    } catch (e) {
        return e.message;
    }
}

