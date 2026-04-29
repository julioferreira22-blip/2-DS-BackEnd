const alunos = [
    {
        nome: "João Renato",
        dt_nasc: "26/10/2010",
        serie_fav: "The Office"
    },
    {
        nome: "Luis Felipe",
        dt_nasc: "17/03/2010",
        serie_fav: "Brooklyn 99"
    },
    {
        nome: "Gabriel Andrade",
        dt_nasc: "26/04/2010",
        serie_fav: "Globo Rural"
    },
    {
        nome: "Gabriel Xavier",
        dt_nasc: "20/12/2010",
        serie_fav: "The Vampire Diaries"
    }
]

// JSON -> JavaScript Object Notation 
// Notação de Objetos JavaScript

// Criar o JSON:
const alunosJSON = JSON.stringify(alunos)
console.log(alunosJSON)

// Criar o arquivo
const fs = require("fs")
fs.writeFileSync("alunos.json", alunosJSON)

// Ler o arquivo
const alunosArquivo = require("./alunos.json")
console.log(alunosArquivo)

// MOSTRAR OS DADOS DO ARQUIVO ORGANIZADAMENTE
// alunosArquivo.forEach() ... etc
alunosArquivo.forEach((aluno)=>{
    console.log(aluno.nome + 
        " - Data de nascimento: " + aluno.dt_nasc + 
        " - Série favorita: " + aluno.serie_fav)
})
