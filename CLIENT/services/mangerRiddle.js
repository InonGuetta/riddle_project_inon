import readlineSync from 'readline-sync';
import { insert_new_riddle, delete_riddle, update_riddle } from './api.js';



// the code working white mongo
export async function insert_new_riddle_to_db() {
    try {

        console.log('hello now create new riddle: ');

        const to_name = readlineSync.question('what the type of new question:  ')
        const to_taskDescription = readlineSync.question('what is the question:  ')
        const to_correctAnswer = readlineSync.question('the answer currect of this question:  ')

        const newQuestion = {
            name: to_name,
            taskDescription: to_taskDescription,
            correctAnswer: to_correctAnswer,
        }


        await insert_new_riddle(newQuestion);
        console.log('inserted is new question to db mongo');
        return '';
    } catch (e) {
        console.log(e.message);
        return;
    }
}

//===============================================================

export async function update_riddle_to_mongo() {
    try {
        const to_change = readlineSync.question("What question do you want to change?");

        const new_name = readlineSync.question("what the new name of the riddle ");
        const new_taskDescription = readlineSync.question("what the new task Description of the riddle ");
        const new_correctAnswer = readlineSync.question("the new correct answer ");

        


        await update_riddle(to_change,{new_name,new_taskDescription,new_correctAnswer});
        console.log("the update riddle successfuly ");
        return "";
    } catch (e) {
        console.log(e.message);
    }
}

// the code working fix white mongo
export async function delete_riddle_form_mongo() {
    try {
        const remove_by_question = readlineSync.question("please insert the taskDescription you want remove: ")
        await delete_riddle(remove_by_question);
        console.log("remove successfuly");
        return '';
    } catch (e) {
        console.log(e.message);
    }
}
