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

adicionarProduto('Boné', 20, 30);
atualizarProduto('Boné', 12);

alert(estoque[0].quantidade);

