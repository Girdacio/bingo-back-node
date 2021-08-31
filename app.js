const express = require('express');
const bingoManager = require('./bingo-manager');
 
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
 
const app = express();
 
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
 
app.use(helmet());
 
app.use(express.json());
 
app.use(morgan('dev'));
 
app.post('/login', (req, res, next) => {
    res.json({ token: '123456' });
});

app.post('/bingo', (req, res, next) => {
    let bingo = bingoManager.addBingo(req.body);
    res.json(bingo);
});
 
module.exports = app;