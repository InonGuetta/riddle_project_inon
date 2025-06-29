// בזכות הספרייה הזאת ניתן להשתמש בהזנת ערך הפונקצייה
import readlineSync from 'readline-sync';

import {allQ} from './../main_manger/mangerRiddle.js'



class Riddle{
    constructor(id,name,taskDescription,correctAnswer){
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }
    
    ask(){
        console.log(this.taskDescription);
        let pause = false;
        while(!pause){
            let user_answer = readlineSync.question('please give here you answer :');
            if (user_answer == this.correctAnswer){
                console.log("Your answer is correct \n");        
                pause = true;
            }else{
                console.log("you worng please try again: \n");        
                console.log(this.taskDescription); 
            }
        }
    }
}

for(let i = 0;i<allQ.length;i++){
    const to_riddle = new Riddle(allQ[i].id,allQ[i].name,allQ[i].taskDescription,allQ[i].correctAnswer);     
    to_riddle.ask();
}



