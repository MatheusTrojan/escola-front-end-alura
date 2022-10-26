let titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista"

let pacientes = document.querySelectorAll(".paciente");
for (i = 0; i < pacientes.length; i++){

    let paciente = pacientes[i]

    let tdAltura = paciente.querySelector(".info-altura");
    let tdPeso = paciente.querySelector(".info-peso");
    let tdImc = paciente.querySelector(".info-imc");

    let altura = tdAltura.textContent;
    let peso = tdPeso.textContent;

    let alturaEhValida = true;
    let pesoEhValido = true;

    if (peso <= 0 || peso > 1000) {
        console.log("Peso inválido!");
        tdPeso.textContent = "Peso inválido!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido")
    }

    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida!");
        tdAltura.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido")
    }

    if (alturaEhValida && pesoEhValido) {

        let imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);    
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}

let btnAdicionar = document.getElementById("adicionar-paciente")

btnAdicionar.addEventListener("click", function(event) {
    event.preventDefault()
    
    let form = document.querySelector("#form-adiciona")
    let nome = form.nome.value
    let peso = form.peso.value
    let altura = form.altura.value
    let gordura = form.gordura.value

    let pacienteTr = document.createElement("tr");

    let nomeTd = document.createElement("td")
    let pesoTd = document.createElement("td")
    let alturaTd = document.createElement("td")
    let gorduraTd = document.createElement("td")
    let imcTd = document.createElement("td")

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    
    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    let tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr)
})