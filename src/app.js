const app = require('express')();

app.get('/', (req, res) => {
    res.status(200).send();
});

// eslint-disable-next-line no-undef
module.exports = app;