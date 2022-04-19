import { Produto } from "../../domain/entities/produto";
import { cadastrarProduto } from "../../domain/usecases/cadastrar-produto";

export class cadastrarProdutoService implements cadastrarProduto{
    //deve ter o indicador de async devido o Primise 
    //torna o método assincrono - deixa a aplicação mais fluida 
    async cadastrar (produto: Produto) : Promise<Produto[]> {
        
        return [];
    }
    
}