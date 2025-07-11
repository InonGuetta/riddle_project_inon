import { readFile } from 'fs/promises';

// code working if runnig him from here
const path = './../CLIENT/DB/ridels.txt';
export async function all_riddle(){
    try{
        const data = await readFile(path,'utf8');
        const data2 = JSON.parse(data);
        return data2;
    }catch(e){
        console.log(e.message);
        return;
    }
}




