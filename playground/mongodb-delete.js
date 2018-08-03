const { MongoClient, ObjectID } = require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';
const dbName = 'TodoApp';
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err)
        return console.log('Unable to connect to the MongoDB server', err);
    const db = client.db(dbName);
    console.log('Connected to the server');
    //deleteMany
    /*db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then(res => {
        console.log(res);
    });*/
    //deleteOne
    /*db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(res => {
        console.log(res);
    })*/
    //findOneAndDelete 
    /*db.collection('Todos').findOneAndDelete({completed: false}).then(res => {
        console.log(res);
    });*/
    /*db.collection('Users').deleteMany({name: 'Repetido'}).then(res => {
        console.log(res);
    })*/
    /*db.collection('Users').deleteOne({_id: new ObjectID('5b6363a7a469352748dc769d')}).then(res => {
        console.log(res);
    });*/
    db.collection('Users').findOneAndDelete({name: 'Carmen'}).then(res => {
        console.log(res);
    });
    //client.close();
});