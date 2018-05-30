const express = require('express');
const router = express.Router();
const {data} = require('../data/flashCardsData.json');

router.get('/:id', (req, res) => {
    const {side} = req.query;
    const {cards} = data;
    const {id} = req.params;
    const text = cards[id][side];
    const {hint} = cards[id];
    const templateData = {text, hint}
    res.render('card', templateData);
});

module.exports = router;