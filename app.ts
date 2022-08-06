import { Pessoa } from "./Pessoa";
import { Cliente } from "./Cliente";
import { Empregado } from "./Empregado";

let pessoa1 = new Pessoa("Caio do Carmo", 22, "Camaçari", "Bahia", "123456789");
let pessoa2 = new Pessoa("thainá", 23, "Camaçari", "Bahia", "123456789");

pessoa1.apresentar()
pessoa2.apresentar()

let cliente: Cliente = new Cliente("Dorival Junior", 50, "São Paulo", "São Paulo", true, "123456789");
cliente.apresentar()
cliente.verificarAssinatura()
cliente.getCpf()

let cliente2: Cliente = new Cliente("Gabriel Barbosa", 27, "Rio de Janeiro", "Rio de Janeiro", false, "123456789");
cliente2.apresentar()
cliente2.verificarAssinatura()

let empregado: Empregado = new Empregado("João Paulo", 25, "Salvador", "Bahia", "123456789")
empregado.apresentar()
empregado.contrato()
