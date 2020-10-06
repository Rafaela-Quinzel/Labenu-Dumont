function criarLista() {
    const criarTarefa = document.getElementById("tarefa")
    const diaEscolhido = document.getElementById("dias-semana").value
    const minhaLista = document.getElementById(diaEscolhido)

    if(criarTarefa.value !== ""){
        minhaLista.innerHTML += `<li>${criarTarefa.value}</li>`
        criarTarefa.value= ""
    } else{
        alert("Digite uma informação válida!")
    }
  
}
