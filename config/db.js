const mongoose = require('mongoose');


const connectionURI = 'mongodb+srv://hailey:abc1234@cluster0.rciby.mongodb.net/project2again?retryWrites=true&w=majority';

const db = mongoose.connection;

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});


db.on('connected', function(){
    console.log(`connected to mongo db at ${db.host}:${db.port}`);
});

