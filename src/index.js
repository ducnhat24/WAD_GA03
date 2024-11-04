const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const { engine } = require('express-handlebars'); // 

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/product', (req, res) => {
    res.render('product');
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about_us', (req, res) => {
    res.render('about_us');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/product/product_details', (req, res) => {
    res.render('product_details');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});