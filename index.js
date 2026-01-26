const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello world')
})

app.get('/profile', function (req, res) {
    res.send('Hello Issaq')
})

app.listen(3000)