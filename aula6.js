//                0         1         2          3
const alunos = ["Amanda", "Ariel", "Carlos", "Cristyan"]

alunos.push("Raniel")
console.log(alunos)

alunos.pop()
// .splice(índice, qtd_deletar, )
alunos.splice(2, 0, "Raniel")
console.log(alunos)

alunos.forEach((aluno) => {
    console.log(aluno)
})