//---> EXERCÍCIOS:
function criarLista() {
    const criarTarefa = document.getElementById("tarefa")
    const criarData = document.getElementById("data")
    const criarHorario = document.getElementById("horario")
    const diaEscolhido = document.getElementById("dias-semana").value
    const minhaLista = document.getElementById(diaEscolhido)
    

    if(criarTarefa.value !== ""){                                                                                 //---> DESAFIO 4
        minhaLista.innerHTML += `<li id="item" onclick ="riscarTarefa(this)">Tarefa: ${criarTarefa.value} <br> Data: ${criarData.value} <br> Horário: ${criarHorario.value}</li>`
        criarData.value= ""
        criarHorario.value= ""
        criarTarefa.value= ""
    } else{
        alert("Digite uma informação válida!") //---> DESAFIO 1
    }
}

//---> DESAFIO 2
function riscarTarefa (li) {
    li.style.color="green"
    li.style.textDecoration= "line-through" 
}

//---> DESAFIO 3
function apagarTarefas(){
    const confirma = confirm("Você tem certeza que quer deletar o item da lista?")
    const lista = document.getElementsByClassName("minha-lista")
         if(confirma){                           
         for(let item of lista){
            item.innerHTML = ""
        }
    }
}

//---> DESAFIO 5 - Está no arquivo responsivo.css
