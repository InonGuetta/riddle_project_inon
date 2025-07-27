// import { show_all } from "./show_all.js";
import { menu } from './menu.js';
import { Riddle } from '../classes/Riddle.js';
import { insert_new_riddle_to_db, update_riddle_to_mongo, delete_riddle_form_mongo } from '../services/mangerRiddle.js';
import readlineSync from 'readline-sync';
import { getRiddle, allPlayers } from '../services/api.js';


// TODO: change function names to camel case
let pause = false
while (!pause) {
    menu();
    const input_user = readlineSync.question('please insert here you choice : ');
    switch (input_user) {
        case "1":
            console.log(`${await Riddle.run()} \n`);
            break;
        case "2":
            console.log(await getRiddle(), '\n');
            break;
        case "3":
            console.log(await insert_new_riddle_to_db(), '\n');
            break;
        case "4":
            console.log(await update_riddle_to_mongo(), '\n');
            break;
        case "5":
            console.log(await delete_riddle_form_mongo(), "\n");
            break;
        case "6":
            console.log('check 6 ');
            break;
        case "7":
            console.log('check 7');
            break;
        case "8":
            break;
        case "9":
            console.log(await allPlayers(), '\n');
            break;
        case "0":
            console.log('God Bay')
            pause = true
            break;
    }
}