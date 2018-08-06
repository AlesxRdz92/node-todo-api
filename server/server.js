var mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/TodoApp';
mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true });
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

new User({
    email: 'alesx.rdz@hotmail.com'
}).save().then(doc => {
    console.log('Saved', doc);
}, e => {
    console.log('It was an error', e);
});

/*new Todo({
    text: 'Homework'
}).save().then(doc => {
    console.log('Saved', doc);
}, e => {
    console.log('Unable to save', e);
});*/
