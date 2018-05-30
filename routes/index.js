const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const username = req.cookies.username;
    if(!username){
        res.redirect('/hello');
    } else {
        res.render('index', {username});
    }
});

router.get('/hello', (req, res) => {
    const username = req.cookies.username;
    if(!username) {
        res.render('hello');
    }else {
        res.redirect('/');
    }    
});

router.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.render('index', {username: req.body.username});
});

router.post('/goodbye', (req, res) => {
    res.clearCookie("username");
    res.redirect('/hello');
});

module.exports = router;