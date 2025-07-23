import { readFile, writeFile } from 'fs/promises';
import express, { Router } from 'express';

const server = express();
server.use(express.json())
const path = '../DB/ridels.txt';

//======================================================
// read
async function all_riddle() {
    try {
        let data = await readFile(path, 'utf8');
        data = JSON.parse(data);
        return data;
    } catch (e) {
        console.log(e.message);
        return;
    }
}


//======================================================

server.get('/get', async (req, res) => {

    const data_riddle = await all_riddle()
    console.log(data_riddle);
    res.json(data_riddle);
})

//======================================================
// create
server.post('/post', async (req, res) => {
    async function create_new_riddle() {
        try {
            const data_riddle = await all_riddle();

            console.log('hello now add new riddle: ');

            let newQuestion = req.body;

            data_riddle.push(newQuestion)
            await writeFile(path, JSON.stringify(data_riddle), 'utf8');
            console.log('inserted is new question');
            return '';
        } catch (e) {
            console.log(e.message);
            return;
        }
    }
    console.log(await create_new_riddle());
})

//===================================================
// update 
server.post('/update', async (req, res) => {
    try {

        let data = await all_riddle()
        let new_data_riddle = req.body;

        const check = Number(new_data_riddle.id);

        if (!data.some(item => Number(item.id) == check)) {
            return res.status(403).send('we are sorry but its id not exsist');
        }

        data.forEach(item => {
            if (item.id == new_data_riddle.id) {
                item.name = new_data_riddle.name,
                    item.taskDescription = new_data_riddle.taskDescription,
                    item.correctAnswer = new_data_riddle.correctAnswer
            }
        });

        await writeFile(path, JSON.stringify(data), 'utf8');
        res.send('updated successfully');
    } catch (e) {
        console.error(e.message);
    }
})

//===================================================
// delete
server.delete('/delete/:id', async (req, res) => {
    try {
        let data = await all_riddle();
        const to_delete_by_id = Number(req.params.id);

        const exsist = data.some(item => Number(item.id) === to_delete_by_id)

        if(!exsist)return res.status(404).send('id not exsist')

        const new_data = data.filter(item => Number(item.id) !== to_delete_by_id);
        await writeFile(path,JSON.stringify(new_data),'utf8') 
        res.send('delete successfuly')
    } catch (e) {
        console.error(e.message);
    }
})


//===================================================

server.listen(4545, () => {
    console.log('you connect to server about port: ', 4545);
})


