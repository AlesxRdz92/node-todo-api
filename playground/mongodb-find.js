const { MongoClient, ObjectID } = require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';
const dbName = 'TodoApp';
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err)
        return console.log('Unable to connect to the MongoDB server', err);
    const db = client.db(dbName);
    console.log('Connected to the server');
    /*db.collection('Todos').find({_id: new ObjectID('5b630b1036318b43042486e2')}).toArray().then(docs => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, err => {
        console.log('Unable to fetch todos', err);
    });*/
    /*db.collection('Todos').find().count().then(count => {
        console.log('Todos count: ', count);
    }, err => {
        console.log('Unable to fetch todos', err);
    });*/
    db.collection('Users').find({ lastName: 'Góngora' }).toArray().then(docs => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, err => {
        console.log('Unable to fetch todos', err);
    });
    //client.close();
});