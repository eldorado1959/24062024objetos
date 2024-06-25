

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.cumprimentar = function () {
        console.log("ol\u00E1 ".concat(this.nome));
    };
    return Pessoa;
}());
var Crianca = /** @class */ (function (_super) {
    __extends(Crianca, _super);
    function Crianca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crianca.prototype.cumprimentar = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade));
    };
    return Crianca;
}(Pessoa));
var Adulto = /** @class */ (function (_super) {
    __extends(Adulto, _super);
    function Adulto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adulto.prototype.cumprimentar = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade));
    };
    return Adulto;
}(Pessoa));


var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicado = anoPublicado;
    }
    Livro.prototype.obterDetalhes = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", Autor: ").concat(this.autor, ", Ano Publicado: ").concat(this.anoPublicado);
    };
    return Livro;
}());
// Criando uma instância da classe Livro
var meuLivro = new Livro("Dom Quixote", "Miguel de Cervantes", 1605);
// Chamando o método obterDetalhes
var detalhesLivro = meuLivro.obterDetalhes();
console.log(detalhesLivro); // Saída: Título: Dom Quixote, Autor: Miguel de Cervantes, Ano Publicado: 1605
