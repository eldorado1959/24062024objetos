
let leitora = require('readline-sync')


class Alunos{
    nome3: string
    notas: Array <number>
  
    
    constructor(nome3: string){
        this.nome3 = nome3
        this.notas = []
    }

   addNotas(): void{
    let nota1 = leitora.questionInt("primeira nota: ")
    let nota2 = leitora.questionInt("seg nota: ")
    let nota3 = leitora.questionInt("terc nota: ")
    this.notas.push(nota1,nota2,nota3)
}

    calcularNotas(){
    let media = (this.notas[0] + this.notas[1] + this.notas[2])/3
    return `a media é ${media}`

    }
}
 
let nomeAluno = leitora.question("QuL NOME")

let alunoNovo = new Alunos(nomeAluno)

alunoNovo.addNotas()

console.log(alunoNovo.calcularNotas())










    

   