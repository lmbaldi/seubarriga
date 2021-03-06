const app = require('express')();
const consign = require('consign');

consign({cwd: 'src', verbose: false})
    .include('./config/middlewares.js')
    .into(app);

app.get('/', (req, res) => {
    res.status(200).send();
});

app.get('/users', (req, res) => {
    const users = [
        { name: 'Bianca', email: 'bianca@gmail.com' },
    ];
    res.status(200).json(users);
});

app.post('/users', (req, res) => {
    res.status(201).json(req.body);
});

// eslint-disable-next-line no-undef
module.exports = app;