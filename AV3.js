//               0         1         2          3              4             5                 6               7            8        9                  10
const produtos = ["Arroz", "Feijão", "Macarrão", "Pinhosol", "Amaciante", "Sabão em pó", "Cabo de vassoura", "Bombril", "Esponja", "Prato", "Conjunto de talheres"]

const preco = [  26.50,   24.50,   27.90 ,    12.30,   29.80 ,    31.20,  13.26,    12.30 ,   8.90,   17.47,  32.13]
 
console.log ( produtos[0])
console.log ( produtos[1])
console.log ( produtos[2])
console.log ( produtos[3])
console.log ( produtos[4])
console.log ( produtos[5])
console.log ( produtos[6])
console.log ( produtos[7])
console.log ( produtos[8])
console.log ( produtos[9])
console.log ( produtos[10])


let contador = 0 //variável de inicio
while (contador  <= 3){ //condição de prada
    console.log (produtos [contador] + " - "  + preco[contador])
    contador = contador + 1 //Incrmento de laço
}
produtos.push("Panela")
console.log(produtos)

produtos.pop()
// .splice(índice, qtd_deletar, )
produtos.splice(2, 0, "Panela")
console.log(produtos)

produtos.forEach((produto) => {
    console.log(produto)
})
preco.push(34.12)
console.log(preco)

preco.pop()
// .splice(índice, qtd_deletar, )
preco.splice(2, 0, 34.12)
console.log(preco)

preco.forEach((preco) => {
    console.log(preco)
})