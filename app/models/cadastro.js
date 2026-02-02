import { v4 as uuidv4 } from "uuid";
class Cadastro {
    constructor( nome, telefone, email, cargo, nome_empresa, cnpj, setor, status, detalhe  ) {
        this.id = uuidv4();
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.cargo = cargo;
        this.nome_empresa = nome_empresa;
        this.cnpj = cnpj;
        this.setor = setor;
        this.status = status;
        this.detalhe = detalhe
        }

}

export default Cadastro;