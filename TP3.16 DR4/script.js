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

const marcarConcluida  = (id) => {
    for(tarefa of tarefas){
        if(tarefa.id === id ){
            tarefa.concluida = true
        }
    }
}

const listarTarefas = (prioridade) => {
    return tarefas.filter(tarefa => tarefa.prioridade == prioridade)
}

const gerarRelatorio = () => {
    tarefas.forEach(tarefa => {
        console.log(`Tarefa: ${tarefa.descricao}, Status: ${tarefa.concluida ? "Concluída":"Não concluída"}`)
    })
}

const resumoTarefas = () =>{
    const totalTarefas = tarefas.reduce((soma) => soma += 1, 0)
    const totalConcluidas = tarefas.filter(tarefa => tarefa.concluida).length
    const totalNaoConcluidas = tarefas.filter(tarefa => !tarefa.concluida).length
    return `Total tarefas: ${totalTarefas}, total concluidas: ${totalConcluidas}, total não concluidas: ${totalNaoConcluidas}`

}


adicionarTarefa('Ler um livro', 'baixa');
adicionarTarefa('Lavar prato', 'baixa');
editarTarefa(1, 'Estudar JavaScript intensivamente', 'alta');
marcarConcluida(1)
console.log(listarTarefas("baixa"));
gerarRelatorio();
console.log(resumoTarefas())
