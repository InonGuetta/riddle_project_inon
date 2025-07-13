import readlineSync from 'readline-sync';
import { performance } from 'node:perf_hooks';
import { Player } from './Player.js';
import { Update } from '../DAL/DALupdate.js'
import { Read } from '../DAL/DALread.js';
import { all_riddle } from '../services/mangerRiddle.js';

// שים לב אתה צריך להתייחס אל זה כאל 
// interface
// ולא כאל הורשה 
export class Riddle extends Player {

    constructor(user_name, id_player, id, name, taskDescription, correctAnswer) {
        super(user_name, id_player);
        this.user_name = user_name;
        this.id_player = id_player;



        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }

    ask() {
        console.log(`\n===== Hi ${this.user_name} =====\n`);
        console.log(`The question is: ${this.taskDescription}`);

        while (true) {
            const user_answer = readlineSync.question('Please enter your answer: ');
            if (user_answer.trim() === this.correctAnswer) {
                console.log("Your answer is correct!\n");
                break;
            }
            console.log("Wrong answer, please try again:\n");
        }
    }

    static async run() {
        const name_client = readlineSync.question("Please insert your name: ");
        let totalTime = 0;

        const data = await all_riddle();
        const toPlayerTxt = await Read();
        const toPlayer = JSON.parse(toPlayerTxt);
        // אני חושד כי הוספת שורת הקוד הזה הוא יוצר את הבעיה 
        const id_player = toPlayer.length + 1;
        let counter = 0;
        for (let i of data) {
            const riddle = new Riddle(
                name_client,
                id_player,
                i.id,
                i.name,
                i.taskDescription,
                i.correctAnswer
            );
            counter++;

            const start = performance.now();
            riddle.ask();
            const end = performance.now();

            totalTime += end - start;
        }
        const avgTimeSeconds = (totalTime / counter / 1000).toFixed(1);

        const summary = `Player ID: ${id_player}\nPlayer Name: ${name_client}\nAverage Answer Time: ${avgTimeSeconds} seconds per question.`;

        console.log("\n==== Game Summary ====");
        console.log(summary);

        const objToDB = {
            id: id_player,
            name: name_client,
            average_time_seconds: avgTimeSeconds
        };

        await Update(objToDB)
        return JSON.stringify(objToDB);
    }
}