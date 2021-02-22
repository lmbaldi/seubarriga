const express = require('express');

const app = express();

//configuracao para responder o recurso /
app.get('/', (req, res) => {
    res.status(200).send();
});

//start server
app.listen(3001);