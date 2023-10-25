export interface CadastradoUsuario {
    id: number;
    name: string;
    tel1: string; 
    tel2: string;
    email: string;
    senha: string;
    confirmacaoSenha: string; 
    nascimento: string; 
    endereco: string; 
}

export interface RequestCadastro {
    usuario: CadastradoUsuario; 
}