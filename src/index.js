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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});