// מייבא את פונקציית ה crud על מנת להשתמש איתו בהמשך ל
import { Create } from '../DAL/DALcreate.js';

// עובד כמו שצריך 


// to test 
const obj = {
    id:"falafel",
    name:"inon_guetta",
    time:2.2
}

async function run(obj){
   await Create(JSON.stringify(obj))
}
run(obj);




