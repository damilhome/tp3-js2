const tarefas = []

const adicionarTarefa = (descricao,prioridade, concluida = false) => {
    tarefas.push({
        id: tarefas.length + 1,
        descricao: descricao,
        concluida: concluida,
        prioridade: prioridade,
    })
}

const editarTarefa  = (id, descricao, prioridade) => {
    for(tarefa of tarefas){
        if(tarefa.id === id ){
            tarefa.descricao = descricao;
            tarefa.prioridade = prioridade;
        }
    }
}

const removerTarefa = (id) => {
    for(i in tarefas){
        if(tarefas[i].id === id ){
            tarefas.splice(i,1)
        }
    }
}

// Testando a função de adição
adicionarTarefa('Ler um livro', 'baixa');
adicionarTarefa('Lavar prato', 'baixa');
// Testando edição e remoção
editarTarefa(1, 'Estudar JavaScript intensivamente', 'alta');
removerTarefa(2);
alert(JSON.stringify(tarefas));