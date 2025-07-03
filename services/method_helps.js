import {readFile} from  'fs';
// זה נצרך על מנת שנוכל להשתמש בפונקציית path כמו שצריך 
import path from 'path';
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function show_all(params) {
    // יצירת משתנה של הנתיב ממנו נעבוד 
    const filePath =  path.join(__dirname,'../DB/db.txt')
    // שימוש בפונקציית filePath
    readFile(filePath,'utf8',(err,data) =>{
        if(err){
            console.log(err);
            return;            
        }
            console.log(data);
            return
    });
}