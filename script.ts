class Patinete {
    private rodas : number;
    private cor : string;
    private tamanho: number;


    constructor (rodas :number, cor: string, tamanho : number){
    this.cor = cor;
    this.rodas = rodas;
    this.tamanho = tamanho;

    }
}
const patinete = new Patinete(2,'preto',1);




console.log(patinete)


