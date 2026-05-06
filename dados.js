const fs = require("fs");

// ler arquivo JSON
let dados = fs.readFileSync("produtos.json");
let produtos = JSON.parse(dados);

// exportar os produtos
module.exports = produtos;
