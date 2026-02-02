"use client"

class Cadastros {
    constructor() {
        this.cadastros = []
    }
    addCadastro(cadastro) {
        this.cadastros.push(cadastro);
    }
    getCadastros() {
        return this.cadastros
    }
}