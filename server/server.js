var mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/TodoApp';
mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true });
var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});
/*var newTodo = new Todo({
    text: 'Cook dinner'
});
newTodo.save().then(doc => {
    console.log('save todo', doc);

}, e => {
    console.log('Unable to save todo');
});*/

new Todo({
    text: 'Shopping',
    completed: false,
    completedAt: 5
}).save().then(doc => {
    console.log('Saved', doc);
}, e => {
    console.log('Unable to save', e);
});
