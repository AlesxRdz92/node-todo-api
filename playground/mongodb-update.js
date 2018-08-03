const { MongoClient, ObjectID } = require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';
const dbName = 'TodoApp';
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err)
        return console.log('Unable to connect to the MongoDB server', err);
    const db = client.db(dbName);
    console.log('Connected to the server');
    /*db.collection('Todos').findOneAndUpdate(
        { _id: new ObjectID('5b647be1510ee40cccc5efa1') },
        {
            $set: {
                completed: true
            }
        },
        { returOriginal: false }).then(res => {
            console.log(res);
        })*/
    db.collection('Users').findOneAndUpdate({ _id: new ObjectID('5b6316be7a0d542e1cddd6db') }, { $set: { lastName: 'Rodríguez' }, $inc: {age: 1} }, {returnOriginal: false}).then(res => {
        console.log(res);
    });
});