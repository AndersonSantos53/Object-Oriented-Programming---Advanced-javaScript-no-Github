var Paciente = /** @class */ (function () {
    function Paciente(nome, idade, sexo, nacionalidade) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.nacionalidade = nacionalidade;
    }
    Paciente.prototype.cadastroConcluido = function () {
        console.log('Seu cadastro foi concluido com sucesso!');
    };
    return Paciente;
}());
var paciente = new Paciente('Roger', 22, 'Masculino', 'Brasileiro');
console.log("Nome do paciente: ".concat(paciente.nome, " \n Idade: ").concat(paciente.idade, " \n Sexo: ").concat(paciente.sexo, " \n Nacionalidade: ").concat(paciente.nacionalidade));
paciente.cadastroConcluido();
