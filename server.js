const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport')
require('ejs');
const port = 3000;
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const app = express();

require('./config/db');
require('./config/passport')(passport)

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));


app.use(passport.initialize());
app.use(passport.session());


app.use(
    session({
        secret: 'supersecret',
        resave: false,
        saveUninitialized: false
    })
); 






app.use('/', indexRouter);
app.use('/auth', authRouter);


app.listen(port, function(){
    console.log(`express listening on port: ${port}`);
});