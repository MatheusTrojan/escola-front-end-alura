let botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    
    //metodo de busca AJAX

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
    let erroAjax = document.querySelector("#erro-ajax")
        if (xhr.status == 200) {

            let resposta = xhr.responseText;
            let pacientesLista = JSON.parse(resposta);

            pacientesLista.forEach(function(paciente) {
                adicionaNaTabela(paciente)
            })

            erroAjax.classList.add("invisivel")
        } else {
            console.log(xhr.status)
            console.log(xhr.responseText)

            erroAjax.classList.remove("invisivel")
        }


    });

    xhr.send();
})