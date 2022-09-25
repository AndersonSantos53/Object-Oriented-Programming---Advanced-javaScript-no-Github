var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(nomeCliente, cpf, agencia, numeroDaConta) {
        this.nomeCliente = nomeCliente;
        this.cpf = cpf;
        this.agencia = agencia;
        this.numeroDaConta = numeroDaConta;
    }
    ContaBancaria.prototype.concluido = function () {
        console.log('Cadastro concluido com sucesso!');
    };
    return ContaBancaria;
}());
var contaBancaria = new ContaBancaria('Anderson', 12121212121, 1213, 12334);
console.log("Nome: ".concat(contaBancaria.nomeCliente, " \n CPF: ").concat(contaBancaria.cpf, " \n Agencia").concat(contaBancaria.numeroDaConta, " \n Numero da conta: ").concat(contaBancaria.agencia, " "));
contaBancaria.concluido();
