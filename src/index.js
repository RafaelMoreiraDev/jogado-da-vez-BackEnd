const express = require('express');
const rotas = require('./roteador');
const { json } = require('body-parser');

const port = process.env.PORT || 3001;

const app = express();
app.use(express.json())
app.use(rotas);


app.listen(port)