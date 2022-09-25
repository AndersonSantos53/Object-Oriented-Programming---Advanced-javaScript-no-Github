class Paciente {
    public nome: string;
    public idade: number;
    public sexo: string;
    public nacionalidade : string;

    constructor(nome: string, idade:number, sexo:string,nacionalidade: string){
        this.nome= nome;
        this.idade = idade;
        this.sexo = sexo;
        this.nacionalidade = nacionalidade;
    }
  cadastroConcluido(){
    console.log('Seu cadastro foi concluido com sucesso!');
  }
}

const paciente = new Paciente ('Roger',22,'Masculino', 'Brasileiro')
console.log(`Nome do paciente: ${paciente.nome} \n Idade: ${paciente.idade} \n Sexo: ${paciente.sexo} \n Nacionalidade: ${paciente.nacionalidade}`);
paciente.cadastroConcluido()