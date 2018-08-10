const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');
var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    new Todo({
        text: req.body.text
    }).save().then(doc => {
        res.send(doc);
    }, e => {
        res.status(400).send();
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then(todos => {
        res.send({ todos });
    }, e => {
        res.status(400).send();
    });
});

app.get('/todos/:id', (req, res) => {
    Todo.findById(req.params.id).then(todo => {
        if (!todo)
            return res.status(404).send('ID not found');
        res.send(todo);
    }, e => res.status(400).send());
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = { app };