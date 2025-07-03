import { show_all } from "./method_helps.js";

console.log('please insert here you choice : ');

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
    const input_user = data.trim();


    // הטעות שהייתה לי פה היא שהוא לא היה מוגדר כ string אל תשכח שהוא מחזיר string 
    switch (input_user) {
        case "1":
           show_all();
           process.stdin.pause();
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
        case 8:
            break;
        case 9:
            break;
        case "0":
            console.log('God Bay')
            process.stdin.pause();
            break;
    }
})