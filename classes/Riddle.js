import readlineSync from 'readline-sync';
import {Player} from './Player.js';
import { allQ } from '../riddles/mangerRiddle.js'

export default class Riddle extends Player{

    constructor(user_name ,id, name, taskDescription, correctAnswer) {
        super(user_name);
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }
    

    ask() {
        console.log(`\n===== Hi ${this.user_name} =====
        \n \nThe question is: ${this.taskDescription}`);
        let flag = false;
        while (!flag) {
            let user_answer = readlineSync.question('please give here you answer :');
            if (user_answer == this.correctAnswer) {
                console.log("Your answer is correct \n");
                flag = true;
            } else {
                console.log("you worng please try again: \n");
                console.log(this.taskDescription);
            }
        }
    }

    static run() {
    let time = 0;
    let user_name = readlineSync.question("plese insert you name ");
    for (let i = 0; i < allQ.length; i++) {
        const to_riddle = new Riddle(user_name,allQ[i].id, allQ[i].name, allQ[i].taskDescription, allQ[i].correctAnswer);
        const start = performance.now()
        to_riddle.ask();
        const end = performance.now()
        const the_time = end - start;
        time += the_time;
    }
    // אני מנסה למדוד את הזמן האם המדידה כאן היא מדידה נכונה כמו שצריך 
    const middle_time = (time / 1000).toFixed(1) / allQ.length;
    return (`the avg time to 1 question secondes: ${middle_time}`);
}
}
console.log(Riddle.run());




