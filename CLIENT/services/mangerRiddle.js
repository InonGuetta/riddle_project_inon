import readlineSync from 'readline-sync';
import { writeFile } from 'fs/promises'
import { readFile } from 'fs/promises';
import {insert_new_riddle} from './api.js';

//need runnig its ONLY FROM app.js

// code working fix 
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
//===============================================================

// code working fix
export async function list_id() {
    const data =  await all_riddle();
    const id_of_riddles = []

    data.forEach(item =>{
        id_of_riddles.push(item.id)
    })
    return id_of_riddles;  
}

//===============================================================
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

export async function update_riddle() {
    try {
        const data_riddle = await all_riddle();
        const to_change = Number(readlineSync.question("Select which riddle you want to change by the riddle ID."));
        
        if(!data_riddle.includes(to_change)) return 'we are sorry but this id no exists '

        console.log("now you change the.... ")
        const new_name = readlineSync.question("what the new name of the riddle ");
        const new_taskDescription = readlineSync.question("what the new task Description of the riddle ");
        const new_correctAnswer = readlineSync.question("the new correct answer ");

        data_riddle.forEach(item => {
            if (item.id == to_change) {
                if (new_name.trim() !== "") item.name = new_name;
                if (new_taskDescription.trim() !== "") item.taskDescription = new_taskDescription;
                if (new_correctAnswer.trim() !== "") item.correctAnswer = new_correctAnswer;
            }
        });
        await writeFile(path, JSON.stringify(data_riddle), 'utf8')
        console.log("the update riddle successfuly ");
        return "";
    } catch (e) {
        console.log(e.message);
    }
}

//===============================================================


// the code working fix
export async function delete_riddle() {
    try {
        const data = await list_id();
        let data_riddle = await all_riddle();
        const id_remove = Number(readlineSync.question("what the riddle you wanna reomve "))

        if(!data.includes(id_remove)) return "we are sorry but this id no exists ";

        const update_after_remove_riddle = data_riddle.filter(item => item.id !== id_remove)
        await writeFile(path, JSON.stringify(update_after_remove_riddle),'utf8');
        console.log("remove successfuly");
        return '';
    } catch (e) {
        console.log(e.message);
    }
}
