const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

let visitas = 0;
app.set('views', './pages'); // specify the views directory
app.set('view engine', 'ejs'); // register the template engine

app.get('/datos', (req, res) => {
    res.render('index', req.query);
});

const server = app.listen(PORT, () => {
    console.log(`Server trabajando en http://localhost:${PORT}`);
})