const express = require('express');
const app = express();

const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('heelo');
});

app.listen(port, () => {
    console.log('starting');
})