var mongoose = require('mongoose');
const url = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/TodoApp';
mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true });

module.exports = {
    mongoose
};