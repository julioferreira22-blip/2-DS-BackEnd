const fs = require("fs");
let produtos = require("./dados");


// mostrar produtos
function mostrar() {
  console.log(produtos);
}


// adicionar produto
function adicionar() {
  let novo = {
    id: 11,
    nome: "Chocolate",
    preco: 7,
    marca: "Nestlé",
    estoque: 20,
    categoria: "Doce"
  };

  produtos.push(novo);
  fs.writeFileSync("produtos.json", JSON.stringify(produtos));
}


// filtrar preço < 10
function filtrar() {
  let baratos = produtos.filter(p => p.preco < 10);
  console.log(baratos);
}


// aplicar desconto (10%)
function desconto() {
  produtos.forEach(p => {
    p.preco = p.preco * 0.9;
  });

  fs.writeFileSync("produtos.json", JSON.stringify(produtos));
}


// buscar produto
function buscar() {
  let achado = produtos.find(p => p.nome === "Arroz");
  console.log(achado);
}


// testar
mostrar();
adicionar();
filtrar();
desconto();
buscar();
