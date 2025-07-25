import { fetchAllRiddles } from '../services/riddles.service.js';

export const getAllRiddles = async (req, res) => {
    if (!res) {
        throw new Error("Response object 'res' is undefined. Make sure to use getAllRiddles as an Express route handler, e.g., app.get('/riddles', getAllRiddles)");
    }

    try {
        const riddles = [
            {
                id: 1,
                name: "Riddle 1",
                taskDescription: "What has keys but can't open locks?",
                correctAnswer: "A piano"
            },

        ]

        console.log("==================== Fetching all riddles...");

        res.status(200).json(riddles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};





// הפונקציות הישנות שלי 
// async function all_riddle() {
//     try {
//         let data = await readFile(path, 'utf8');
//         data = JSON.parse(data);
//         return data;
//     } catch (e) {
//         console.log(e.message);
//         return;
//     }
// }

// server.get('/get', async (req, res) => {
//     const data_riddle = await all_riddle()
//     console.log(data_riddle);
//     res.json(data_riddle);
// })

// server.post('/post', async (req, res) => {
//     async function create_new_riddle() {
//         try {
//             const data_riddle = await all_riddle();
//             console.log('hello now add new riddle: ');

//             let newQuestion = req.body;

//             data_riddle.push(newQuestion)
//             await writeFile(path, JSON.stringify(data_riddle), 'utf8');
//             console.log('inserted is new question');
//             return '';
//         } catch (e) {
//             console.log(e.message);
//             return;
//         }
//     }
//     console.log(await create_new_riddle());
// })

// server.post('/update', async (req, res) => {
//     try {

//         let data = await all_riddle()
//         let new_data_riddle = req.body;
//         const check = Number(new_data_riddle.id);

//         if (!data.some(item => Number(item.id) == check)) {
//             return res.status(403).send('we are sorry but its id not exsist');
//         }

//         data.forEach(item => {
//             if (item.id == new_data_riddle.id) {
//                 item.name = new_data_riddle.name,
//                     item.taskDescription = new_data_riddle.taskDescription,
//                     item.correctAnswer = new_data_riddle.correctAnswer
//             }
//         });

//         await writeFile(path, JSON.stringify(data), 'utf8');
//         res.send('updated successfully');
//     } catch (e) {
//         console.error(e.message);
//     }
// })

// server.delete('/delete/:id', async (req, res) => {
//     try {
//         let data = await all_riddle();
//         const to_delete_by_id = Number(req.params.id);

//         const exsist = data.some(item => Number(item.id) === to_delete_by_id)

//         if (!exsist) return res.status(404).send('id not exsist')

//         const new_data = data.filter(item => Number(item.id) !== to_delete_by_id);
//         await writeFile(path, JSON.stringify(new_data), 'utf8')
//         res.send('delete successfuly')
//     } catch (e) {
//         console.error(e.message);
//     }
// })
