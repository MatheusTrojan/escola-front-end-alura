//console.log(pacientes)

// ESSE CODIGO NAO EXCLUI OS PACIENTES INSERIDOS PELO FORMULARIO
// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove()
//     })
// })

let tabelaPaciente = document.querySelector("#tabela-pacientes") //tbody, para mirar nos filhos dele

tabelaPaciente.addEventListener("dblclick", function(event) {

    let alvoDoEvento = event.target;
    let paiDoAlvo = alvoDoEvento.parentNode;
    paiDoAlvo.remove()
})