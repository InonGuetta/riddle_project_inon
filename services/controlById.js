// פונקציה שבודקת את ה id 
// של האובייקט
import { Read } from "../DAL/DALread.js";

// code working
export async function nextId() {
    const dbObj = JSON.parse(await Read());
    console.log(dbObj);


    let max = 0;
    dbObj.forEach(item => {
        if (item.id > max) max = item.id;
    });
    return max;
}
