const estoque = []


function adicionarProduto(nome, quantidade, precoUnitario){
    const produto = {
        nome: nome,
        quantidade: quantidade,
        precoUnitario: precoUnitario,
        
    }
    estoque.push(produto)
}

function atualizarProduto(nome, quantidade){
    for(obj of estoque){
        if(obj.nome === nome){
            obj.quantidade = quantidade
        }

    }
}

function removerProduto(nome){
    for(i in estoque){
        if(estoque[i].nome === nome){
            estoque.splice(i, 1);
        }

    }
}

function calcularValorTotal(){
    let soma = 0;
    for(obj of estoque){
        soma += (obj.precoUnitario * obj.quantidade)
    }
    return soma
}

function relatorioEstoque(){
    for(obj of estoque){
        console.log(`\nProduto: ${obj.nome} \nQuantidade: ${obj.quantidade} \nValores totais: ${obj.precoUnitario * obj.quantidade}`)
    }
}

adicionarProduto('Calça', 7, 100)
adicionarProduto('Tênis', 10, 30);
adicionarProduto('Boné', 20, 30);
atualizarProduto('Tênis', 12);
removerProduto('Boné')

// Testando as funções
console.log(`Valor total do estoque: R$ ${calcularValorTotal()}`);
// Exibindo o relatório do estoque
relatorioEstoque();



