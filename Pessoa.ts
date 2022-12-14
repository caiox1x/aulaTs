export class Pessoa {
    public nome: string;
    public idade: number;
    public estado: string;
    public cidade: string;
    public cpf: string;

    constructor(nome: string, idade: number, estado: string, cidade: string, cpf: string) {
        this.nome = nome;
        this.idade = idade;
        this.estado = estado;
        this.cidade = cidade;
        this.cpf = cpf;
    };

    public apresentar() {
        console.log(`Ola Mundo! meu nome é ${this.nome}, tenho ${this.idade} anos e sou da ${this.cidade} - ${this.estado}`);
    };
};
