const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./routes');
const router = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');

app.use((req, res, next) =>{
    next();
})
app.use('/', router);

app.use((err, req, res, next) => {
    res.locals.error = error;
    res.render('error');
})

app.listen(3000, () => {
    console.log('This app is running!');
});