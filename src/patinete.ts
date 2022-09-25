class Patinete {
    public rodas : number;
    public cor : string;
    public tamanhoCm: number;


    constructor (rodas :number, cor: string, tamanhoCm : number){
    this.cor = cor;
    this.rodas = rodas;
    this.tamanhoCm = tamanhoCm;

    }

    andar(){
        console.log('Quer da uma voltinha?');
    }
}
const patinete = new Patinete(2,'preto',100);
console.log(`Seu patinete ${patinete.cor} tem ${patinete.rodas} rodas e tem ${patinete.tamanhoCm} Cm`);
patinete.andar();

