// import { writeFile } from 'node:fs/promises';
// import { Read } from './DALread';

// const path = './../DB/db.txt';

// export async function Update(new_datas) {
//     try {
//         const old_data = await Read(); 
//         const new_data = old_data + '\n' + JSON.stringify(new_datas);
//         await writeFile(path, new_data, 'utf8');
//         console.log('the update success');
//         return new_data;
//     } catch (e) {
//         return e.message;
//     }
// }


// const obj = {
//     id: 1,
//     name: "inon",
//     time: 2.2,
// }

// async function name(obj) {
//     const full_data = await Update(obj)
//     console.log(full_data);
    

// }
// name(obj)







// הקוד הזה הוא של GPT

import { writeFile } from 'node:fs/promises';
import { Read } from './DALread.js'; 

const path = './../CLIENT/DB/db.txt';

export async function Update(new_datas) {
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
    // כדאי להדפיס כדי לוודא שעדכון הצליח
}

