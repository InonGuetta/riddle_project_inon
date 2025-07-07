import { writeFile } from 'node:fs/promises';

const path = './../DB/db.txt';

// עובד כמו שצריך
export async function Create(newData){
    try{
        await writeFile(path,newData,'utf8');
        console.log('the data transfor success');
        return;
    }catch(err){
        return err.message
    }
}


