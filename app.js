"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("./Pessoa");
const Cliente_1 = require("./Cliente");
const Empregado_1 = require("./Empregado");
let pessoa1 = new Pessoa_1.Pessoa("Caio do Carmo", 22, "Camaçari", "Bahia");
let pessoa2 = new Pessoa_1.Pessoa("thainá", 23, "Camaçari", "Bahia");
pessoa1.apresentar();
pessoa2.apresentar();
let cliente = new Cliente_1.Cliente("Dorival Junior", 50, "São Paulo", "São Paulo", true);
cliente.apresentar();
cliente.verificarAssinatura();
let cliente2 = new Cliente_1.Cliente("Gabriel Barbosa", 27, "Rio de Janeiro", "Rio de Janeiro", false);
cliente2.apresentar();
cliente2.verificarAssinatura();
let empregado = new Empregado_1.Empregado("João Paulo", 25, "Salvador", "Bahia");
empregado.apresentar();
empregado.contrato();