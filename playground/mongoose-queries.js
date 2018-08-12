const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '6b6c511bd72d918194c76bfe';
var idUser = '5b6854d628fa4c54689205fb';

/*if(!ObjectID.isValid(id))
    console.log('ID is not valid');

Todo.find({
    _id: id
}).then(todos => {
    console.log('Todos', todos);
});

Todo.findOne({
    completed: false
}).then(todo => {
    if(!todo)
        return console.log('Item not found');
    console.log('Todo', todo);
});*/

Todo.findById(id).then(todo => {
    if (!todo)
        return console.log('ID not found');
    console.log('Todo by ID', todo);
}, e => console.log('There was an error', e));

User.findById(idUser).then(user => {
    if (!user)
        return console.log('User not found');
    console.log(user);
}, e => console.log('There was an error', e));