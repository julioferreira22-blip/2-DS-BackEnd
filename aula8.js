// AULA 8 - Objetos (chave-valor)
const produto = {
    nome: "Arroz",
    preco: 28,
    quantidade: 100,
    peso: "5kg"
}

const mercado = [
    {
        nome: "Arroz",
        preco: 28,
        quantidade: 100,
        peso: "5kg"
    },
    {
        nome: "Feijão",
        preco: 7,
        quantidade: 200,
        peso: "1kg"
    }
]

function mostrarESTOQUE() {
    /*
    let contador = 0
    while(contador <mercado.length){
        console.log(contador + " - " + mercado[contador].nome + " - R$ " + mercado[contador].preco + " - Quantidade: " + mercado[contador].quantidade)
        contador++
    }
    */
    mercado.forEach((produto) => {
        console.log(produto.nome + 
            " - R$ " + produto.preco + 
            " - Quantidade: " + produto.quantidade +
            " - Peso: " + produto.peso)
    })
}
mostrarESTOQUE()