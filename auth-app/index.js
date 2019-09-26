const main = require('./src/route/main')

const express = require('express')
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, '/public/')));
app.use(express.json())

app.use('/', main);

app.set('views', path.join(__dirname, '/template/views'));
app.set('view engine', 'pug');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening the port ${port}...`));