import { Update } from "../DAL/DALupdate";



// הקוד לא עובד כמו שצריך 


// to test 
const obj = {
    id: 1,
    name: "inon",
    time: 2.2,
}

async function run(obj) {
  const x=  await Update(JSON.stringify(obj))
    
  
}

run(obj)
