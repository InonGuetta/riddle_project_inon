import { Read } from "../DAL/DALread.js";

export async function nextId() {
    const dbObj = JSON.parse(await Read());
    console.log(dbObj);

    let max = 0;
    dbObj.forEach(item => {
        if (item.id > max) max = item.id;
    });
    return max;
    
}
nextId()
