import express from 'express';

const server = express();

server.use(express.json())

server.get('/', (req, res) => {
    res.send('Welcome to the root route!');
});

server.listen(3000, () => {
    console.log('you connect to server about port: ', 3000);
})