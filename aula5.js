// LISTAS (arrays)
const aluno1 = "Amanda"
const aluno2 = "ariel"
const aluno3 = "Carlos"
const aluno4 = "Cristyan"

// Indice: 0  1  2  3
const alunos = ["Amanda", "Ariel", "Carlos", "Cristyan"]
const altura = [  1.51  ,  1.80  ,   1.74 ,   1.53 ]

console.log ( alunos[0])
console.log ( alunos[1])
console.log ( alunos[2])
console.log ( alunos[3])

let contador = 0 //variável de inicio
while (contador  <= 3){ //condição de prada
    console.log (alunos [contador] + " - "  + altura[contador])
    contador = contador + 1 //Incrmento de laço
}