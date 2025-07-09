import { Update } from "../DAL/DALupdate";

// הקוד לא עובד כמו שצריך 

async function run(obj) {
  const x = await Update(JSON.stringify(obj))
}

run(obj)
