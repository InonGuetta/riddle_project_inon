import { show_all } from "./show_all.js";
import { menu } from './menu.js';
import { Riddle } from '../classes/Riddle.js';
import { all_riddle, create_new_riddle} from '../services/mangerRiddle.js';


console.log('please insert here you choice : ');
process.stdin.setEncoding('utf8');
menu();
process.stdin.on('data', async (data) => {
    const input_user = data.trim();
    switch (input_user) {
        case "1":
            console.log(`${Riddle.run()} \n`);
            break;
        case "2":
            console.log(await all_riddle(), '\n');
            menu();
            break;
        case "3":
            console.log(await create_new_riddle(), '\n');
            break;
        case "4":
            console.log('Update an existing riddle');
            break;
        case "5":
            console.log('Delete a riddle');
            break;
        case "6":
            console.log('View leaderboard ');
            break;
        case "7":
            console.log('check 7');
            break;
        case "8":
            break;
        case "9":
            console.log(await show_all() ,'\n');
            menu();
            break;
        case "0":
            console.log('God Bay')
            process.stdin.pause();
            break;
    }

})