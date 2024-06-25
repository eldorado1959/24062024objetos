
class Professor{
    nome: string
    idade: number
    ano_exp: number
    constructor(nome: string, idade: number, ano_exp: number){
        this.nome = nome
        this.idade = idade
        this.ano_exp = ano_exp
    }
}

class Escola{
    nome_esc: string
    end_esc: string
    num_esc: number

    constructor(nome_esc: string, end_esc: string, num_end: number){
        this.nome_esc = nome_esc
        this.end_esc = end_esc
        this.num_esc = num_esc
    }

    getEscola(){
        console.log(`Olá, somos Escola ${this.nome_esc} e nosso Prof. é ${this.nome_esc}`)   
    }
}










