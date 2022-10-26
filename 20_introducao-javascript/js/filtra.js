let campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){
    console.log(this.value)
    let pacientes = document.querySelectorAll(".paciente")

    if (this.value.length > 0){
        for (let i = 0; i < pacientes.length; i++){
        
            let pacienteFiltrado = pacientes[i]
            let tdNome = pacienteFiltrado.querySelector(".info-nome")
            let nome = tdNome.textContent

            let expressaoRegular = new RegExp(this.value, "i")
            
            if (!expressaoRegular.test(nome)){
                pacienteFiltrado.classList.add("invisivel")
            } else {
                pacienteFiltrado.classList.remove("invisivel")
            }
        }  
    } else {
        for (let i = 0; i < pacientes.length; i++){

            let pacienteFiltrado = pacientes[i];
            pacienteFiltrado.classList.remove("invisivel")
        }
    }   
})