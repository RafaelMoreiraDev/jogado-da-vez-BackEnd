
const express = require('express');
const { vezDoJogador, consultar, remover, adicionar } = require('./controladores/jogadores.js');

const rotas = express()

rotas.get("/",vezDoJogador);
rotas.get("/consultar", consultar);
rotas.get("/remover/", remover);
rotas.get("/adicionar", adicionar);



module.exports = rotas;