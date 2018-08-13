require ('./config/config');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');
const app = express();
const port = process.env.PORT;

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

app.delete('/todos/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id).then(todo => {
        if (!todo)
            return res.status(404).send('ID not found');
        res.send({ todo });
    }, e => res.status(400).send());
});

app.patch('/todos/:id', (req, res) => {
    let id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
    if (_.isBoolean(body.completed) && body.completed)
        body.completedAt = new Date().getTime();
    else {
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then(todo => {
        if (!todo)
            return res.status(404).send();
        res.send({ todo });
    }).catch(e => res.status(400).send());
});

app.post('/users', (req, res) => {
    let body = _.pick(req.body, ['email', 'password']);
    new User(body).save().then(user => {
        res.send(user);
    }).catch(e => res.status(400).send());
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = { app };