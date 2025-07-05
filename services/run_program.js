import { show_all } from "./show_all.js";
import { menu } from './menu.js';
import { Riddle } from './../classes/Riddle.js';




console.log('please insert here you choice : ');
process.stdin.setEncoding('utf8');
menu();
process.stdin.on('data', async (data) => {
    const input_user = data.trim();
    switch (input_user) {
        case "1":
            console.log(`${Riddle.run()} \n`);
            menu();
            break;
        case "2":
            console.log('check 2');
            break;
        case "3":
            console.log('check 3');
            break;
        case "4":
            console.log('check 4');
            break;
        case "5":
            console.log('check 5');
            break;
        case "6":
            console.log('check 6');
            break;
        case "7":
            console.log('check 7');
            break;
        case "8":
            break;
        case "9":
            console.log(`${await show_all()} \n`);
            menu();
            break;
        case "0":
            console.log('God Bay')
            process.stdin.pause();
            break;
    }

})