var Professor = /** @class */ (function () {
    function Professor(nome, idade, ano_exp) {
        this.nome = nome;
        this.idade = idade;
        this.ano_exp = ano_exp;
    }
    return Professor;
}());
var Escola = /** @class */ (function () {
    function Escola(nome_esc, end_esc, num_end) {
        this.nome_esc = nome_esc;
        this.end_esc = end_esc;
        this.num_esc = num_esc;
    }
    Escola.prototype.getEscola = function () {
        console.log("Ol\u00E1, somos Escola ".concat(this.nome_esc, " e nosso Prof. \u00E9 ").concat(this.nome_esc));
    };
    return Escola;
}());
