var tarefa = document.querySelector('#tarefa')
var cadastrada = document.querySelector('#tarefas_cadastradas')


function cadastrar() {
    var criarTarefa = document.createElement('li')
    criarTarefa.innerText = tarefa.value
    cadastrada.appendChild(criarTarefa)
}

