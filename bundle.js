var Patinete = /** @class */ (function () {
    function Patinete(rodas, cor, tamanho) {
        this.cor = cor;
        this.rodas = rodas;
        this.tamanho = tamanho;
    }
    return Patinete;
}());
var patinete = new Patinete(2, 'preto', 1);
console.log(patinete);
