//Quando implementar a interface será obrigado

import { Produto } from "../entities/produto";


//       a implementar com todas as regras
export interface cadastrarProduto{
    //arrow function
    // promise - espera o retorno da lista de produto
    cadastrar: (produto: Produto) => Promise<Produto[]>;

} 