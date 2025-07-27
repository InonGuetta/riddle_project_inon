import readlineSync from 'readline-sync';
import { insert_new_riddle, delete_riddle, updateRiddle } from './api.js';
// import { updateRiddle } from '../services/riddles.js';


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
        const id = readlineSync.question("Please insert the ID of the riddle you want to update: ");
        const name = readlineSync.question("Please enter the new name for the riddle: ");
        const taskDescription = readlineSync.question("Please enter the new task description for the riddle: ");
        const correctAnswer = readlineSync.question("Please enter the new correct answer for the riddle: ");

        const updatedRiddle = { id, name, taskDescription, correctAnswer };

        await updateRiddle(updatedRiddle);
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
