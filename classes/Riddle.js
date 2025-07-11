// import readlineSync from 'readline-sync';
// import { Player } from './Player.js';
// import { allQ } from '../riddles/mangerRiddle.js'

// export class Riddle extends Player {

//     constructor(user_name, id_player, id, name, taskDescription, correctAnswer) {
//         super(user_name, id_player);
//         this.user_name = user_name;
//         this.id_player = id_player;
//         // של השאילתות 
//         this.id = id;
//         this.name = name;
//         this.taskDescription = taskDescription;
//         this.correctAnswer = correctAnswer;
//     }


//     ask() {
//         console.log(`\n===== Hi ${this.user_name} =====
//         \n \nThe question is: ${this.taskDescription}`);
//         let flag = false;
//         while (!flag) {
//             let user_answer = readlineSync.question('please give here you answer :');
//             if (user_answer == this.correctAnswer) {
//                 console.log("Your answer is correct \n");
//                 flag = true;
//             } else {
//                 console.log("you worng please try again: \n");
//                 console.log(this.taskDescription);
//             }
//         }
//     }


//     static run() {
//         let time = 0;
//         const name_client = readlineSync.question("plese insert you name ");
//         for (let i = 0; i < allQ.length; i++) {
//             const to_riddle = new Riddle(name_client, 10, allQ[i].id, allQ[i].name, allQ[i].taskDescription, allQ[i].correctAnswer);
//             const start = performance.now()
//             to_riddle.ask();
//             const end = performance.now()
//             const the_time = end - start;
//             time += the_time;

//         }

//         // אני מעוניין להוציא אותו אל קובץ אחר ואני  לא יכול להכניס 
//         const middle_time = (time / allQ.length / 1000).toFixed(1);
//         const obj_to_db = {
//             id: 10,
//             name: this.user_name,
//             middle_time
//         }
//         return (`id: ${this.id_player} user name its ${this.user_name} the avg time to 1 question secondes: ${middle_time}`), obj_to_db;
//     }
// }

import readlineSync from 'readline-sync';
import { performance } from 'node:perf_hooks';
import { Player } from './Player.js';
import { insert_db } from '../DAL/DALupdate.js'
import { all_riddle } from '../services/mangerRiddle.js'; 


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

        let id_player = 10;
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
            counter ++;

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

        async function return_data(objToDB) {
            const data = await insert_db(objToDB);
        }

        return_data(objToDB)
        // מופעלת פונקציית קריאה להעתקת נתונים ל json
        return JSON.stringify(objToDB);
    }
}