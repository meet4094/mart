const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path:' ./config.env' });

require('./db/conn');
// const User = require('./data/userData');

app.use(express.json());

//we link the routwr files to make to route easy
app.use(require('./router/auther'));

const PORT = process.env.PORT;

// Middleware
const middleware = (req, res, next) => {
    console.log(`Hello my Middelware`);
    next();
}

// app.get('/', (req, res) => {
//     res.send(`hello world from the server app.js`);
// });

app.get('/about', middleware, (req, res) => {
    console.log(`Hello my About`);
    res.send(`hello About world from the server`);
});

app.get('/contact', (req, res) => {
    res.send(`hello Contact world from the server`);
});

app.get('/signin', (req, res) => {
    res.send(`hello Login world from the server`);
});

app.get('/signup', (req, res) => {
    res.send(`hello Registration world from the server`);
});

app.listen(5000, () => {
    console.log(`Server is running at port on ${PORT}`);
});