
class Pessoa{
    nome: string
    idade: number
    
    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
        
    }
    
    cumprimentar(): void{
        console.log(`olá ${this.nome}`)
    }
    
}

class Crianca extends Pessoa{
    cumprimentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade}`)
        
    }
}



class Adulto extends Pessoa{
    cumprimentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade}`)
        
    }
}

class Livro {
    titulo: string;
    autor: string;
    anoPublicado: number;

    constructor(titulo: string, autor: string, anoPublicado: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicado = anoPublicado;
    }

    obterDetalhes(): string {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Ano Publicado: ${this.anoPublicado}`;
    }
}

// Criando uma instância da classe Livro
const meuLivro = new Livro("Dom Quixote", "Miguel de Cervantes", 1605);

// Chamando o método obterDetalhes
const detalhesLivro = meuLivro.obterDetalhes();
console.log(detalhesLivro);  // Saída: Título: Dom Quixote, Autor: Miguel de Cervantes, Ano Publicado: 1605




