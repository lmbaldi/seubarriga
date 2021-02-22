const app = require('express')();

app.get('/', (req, res) => {
    res.status(200).send();
});

app.get('/users', (req,res) => {
    const users = [
        {name: 'Bianca', email: 'bianca@gmail.com'},
    ];
    res.status(200).json(users);
});

// eslint-disable-next-line no-undef
module.exports = app;