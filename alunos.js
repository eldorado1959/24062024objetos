var leitora = require('readline-sync');
var Alunos = /** @class */ (function () {
    function Alunos(nome3) {
        this.nome3 = nome3;
        this.notas = [];
    }
    Alunos.prototype.addNotas = function () {
        var nota1 = leitora.questionInt("primeira nota: ");
        var nota2 = leitora.questionInt("seg nota: ");
        var nota3 = leitora.questionInt("terc nota: ");
        this.notas.push(nota1, nota2, nota3);
    };
    Alunos.prototype.calcularNotas = function () {
        var media = (this.notas[0] + this.notas[1] + this.notas[2]) / 3;
        return "a media \u00E9 ".concat(media);
    };
    return Alunos;
}());
var nomeAluno = leitora.question("QuL NOME");
var alunoNovo = new Alunos(nomeAluno);
alunoNovo.addNotas();
console.log(alunoNovo.calcularNotas());
