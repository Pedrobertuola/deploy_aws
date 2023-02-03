const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({message: 'Server is up'});
})

app.post('/teste', (request, response) => {
    const {name, date} =  request.body;

    return response.json({name, date});
})

app.listen(3333)