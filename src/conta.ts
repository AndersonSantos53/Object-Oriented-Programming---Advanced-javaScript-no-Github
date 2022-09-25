class ContaBancaria {
    public nomeCliente: string;
    public cpf:number;
    public agencia: number;
    public numeroDaConta:number;
  

    constructor(nomeCliente:string, cpf:number,agencia:number, numeroDaConta:number){
        this.nomeCliente = nomeCliente;
        this.cpf = cpf;
        this.agencia = agencia;
        this.numeroDaConta = numeroDaConta;

    }
    concluido(){
        console.log('Cadastro concluido com sucesso!');
    }
}

const contaBancaria = new ContaBancaria ('Anderson',12121212121,1213,12334);
console.log(`Nome: ${contaBancaria.nomeCliente} \n CPF: ${contaBancaria.cpf} \n Agencia${contaBancaria.numeroDaConta} \n Numero da conta: ${contaBancaria.agencia} `);
contaBancaria.concluido();

