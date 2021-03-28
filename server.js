const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport')
const connectDB = require('./config/db')
require('ejs');
const port = 3000;
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/posts');
const publicRouter = require('./routes/public')
const methodOverride = require('method-override')
const app = express();

require('./config/db');
require('./config/passport')(passport)

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));


app.use(passport.initialize());
app.use(passport.session());


app.use(
    session({
        secret: 'supersecret',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({mongoUrl: 'mongodb+srv://hailey:abc1234@cluster0.rciby.mongodb.net/project2again?retryWrites=true&w=majority'})
        
    })
); 






app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/post', postRouter);
app.use('/public', publicRouter);


app.listen(port, function(){
    console.log(`express listening on port: ${port}`);
});