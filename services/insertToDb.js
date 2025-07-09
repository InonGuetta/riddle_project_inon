import { Create } from '../DAL/DALcreate.js';

// עובד כמו שצריך 

async function run(obj){
   await Create(JSON.stringify(obj))
}




