var Patinete = /** @class */ (function () {
    function Patinete(rodas, cor, tamanhoCm) {
        this.cor = cor;
        this.rodas = rodas;
        this.tamanhoCm = tamanhoCm;
    }
    Patinete.prototype.andar = function () {
        console.log('Quer da uma voltinha?');
    };
    return Patinete;
}());
var patinete = new Patinete(2, 'preto', 100);
console.log("Seu patinete ".concat(patinete.cor, " tem ").concat(patinete.rodas, " rodas e tem ").concat(patinete.tamanhoCm, " Cm"));
patinete.andar();
