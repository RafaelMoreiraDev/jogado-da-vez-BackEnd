const express = require('express');
const rotas = require('./roteador');
const { json } = require('body-parser');

const app = express();
app.use(express.json())
app.use(rotas);


app.listen(8000)