"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = require("./Pessoa");
class Cliente extends Pessoa_1.Pessoa {
    constructor(nome, idade, estado, cidade, assinante) {
        super(nome, idade, estado, cidade);
        this.assinante = assinante;
    }
    verificarAssinatura() {
        if (this.assinante) {
            console.log("É assinante");
        }
        else {
            console.log("Não é assinante");
        }
    }
    ;
}
exports.Cliente = Cliente;
;
