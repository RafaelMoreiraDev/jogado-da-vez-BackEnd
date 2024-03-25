const { query } = require("express");

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogadorDaVez = 0;

const vezDoJogador = (req, res)=>{

    let nomeDoJogador = jogadores[jogadorDaVez];
    jogadorDaVez++

    if (jogadorDaVez >= jogadores.length) {
        jogadorDaVez = 0;
    }
    return res.json({"o jogador da vez é": {nomeDoJogador}})
}

const consultar = (req, res)=>{
    return res.json(jogadores)
}

const remover = (req, res)=>{
    const indiceDoArray = Number( req.query.indice)
    console.log(indiceDoArray);
    if ( indiceDoArray >= jogadores.length ) {
        res.send(`jogador do índice (${indiceDoArray}) não existe`)
    }
    jogadores.splice(indiceDoArray,1);
    return res.send(jogadores);

}
const adicionar = (req, res)=>{
    let nomeJogador = req.query.nome;
    const indiceDoArray = Number( req.query.indice);

    nomeJogador = `${nomeJogador[0].toUpperCase()}${nomeJogador.slice(1).toLowerCase()}`;
    if (isNaN(indiceDoArray)){
        jogadores.push(nomeJogador);
        return res.send(jogadores);
    }

    if ( indiceDoArray >= jogadores.length ) {
        return res.send(`o índice (${indiceDoArray}) não existe jogador não adicionado`)
    }

    jogadores.splice(indiceDoArray,0, nomeJogador);
    return res.send(jogadores)
}


module.exports = {
    vezDoJogador,
    consultar,
    remover,
    adicionar,
}