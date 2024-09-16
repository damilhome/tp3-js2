/* adicionar estudantes, calcular médias, gerar relatórios de desempenho e identificar os alunos que precisam de recuperação */
let estudantes = [{nome: "Brenno", notas: [10,3,5], situacao: null}, {nome: 'Danilo', notas: [10, 7, 7], situacao: null}, {nome: "Elberth", notas: [5,5,5], situacao: null}]
/* aluno = {nome, notas: [], e situacao: null,} */

function calcularMedia(notas){
    let media = notas.reduce((soma, nota) => soma += nota, 0);
    
    return media/notas.length
}

function atualizarSituacao(estudantes){
    estudantes.map(aluno => {
        if(7 <= calcularMedia(aluno.notas)){
            aluno.situacao = "Aprovado"
        }
        else{
            aluno.situacao = "Recuperação"
        }
    })
    
}



function verificarRecuperacao(estudantes, alunosRecuperacao = []){
    let contador = estudantes.length;
    if(contador > 0){
        if(estudantes[contador-1].situacao === "Recuperação"){
            alunosRecuperacao.push(estudantes[contador-1].nome)
        }
        estudantes.pop()
        verificarRecuperacao(estudantes, alunosRecuperacao);
    }
    return alunosRecuperacao;
    
    
} 

function gerarRelatorio(estudantes){
    atualizarSituacao(estudantes);
    estudantes.forEach(aluno => {
        let media = calcularMedia(aluno.notas);
        console.log(`\nNome: ${aluno.nome} \nNotas: ${aluno.notas} \nMedia: ${media} \nSituação: ${aluno.situacao}`)
    });
}

function main(){
    gerarRelatorio(estudantes);
    console.log(`\nAlunos em recuperação: ${verificarRecuperacao(estudantes)}`);
}

main()

