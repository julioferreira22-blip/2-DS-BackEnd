// Funções
const notasDuda = [8, 6, 4]
const notasNicolle = [1, 4, 9]

function calcularMedia(notas){
    let soma = notas[0] + notas[1] + notas[2]
    let media = soma/3
    console.log("A média é: " + media)
}
calcularMedia(notasDuda)
calcularMedia(notasNicolle)

// Media Arrow Function
let cM = (notas) => {
    let soma = notas[0] + notas[1] + notas[2]
    let media = soma/3
    console.log("A média é: " + media)
}
cM(notasDuda)
cM(notasNicolle)

// Função sem parâmetros
function mostrarNotas(){
    notasDuda.forEach((nota) => {
        console.log(nota)
    })
}
mostrarNotas()