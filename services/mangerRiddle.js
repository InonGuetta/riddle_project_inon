// on massive usses

import readlineSync from 'readline-sync';
import { writeFile } from 'fs/promises'
import { readFile } from 'fs/promises';

// code working if runnig ONLY FROM app.js
const path = 'DB/ridels.txt';
export async function all_riddle() {
    try {
        let data = await readFile(path, 'utf8');
        data = JSON.parse(data);
        return data;
    } catch (e) {
        console.log(e.message);
        return;
    }
}


// the code working with one problem
export async function create_new_riddle() {
    try {
        const data = await all_riddle();

        console.log('hello now create new riddle: ');

        const to_name = readlineSync.question('what the type of new question:  ')
        const to_taskDescription = readlineSync.question('what is the question:  ')
        const to_correctAnswer = readlineSync.question('the answer currect of this question:  ')

        const newQuestion = {
            id: data.length + 1,
            // למה זה לא נקלט כמו שצריך 
            // הבעיה היא שצריך להקליד את זה רק אחרי שכבר הוקש כבר אנטר כלומר רפשר לשלוח את זה רק אחרי שני אנטרים
            name: to_name,
            taskDescription: to_taskDescription,
            correctAnswer: to_correctAnswer,
        }

        data.push(newQuestion)
        await writeFile(path, JSON.stringify(data), 'utf8');
        console.log('inserted is new question');
        return'';
    } catch (e) {
        console.log(e.message);
        return;
    }
}


