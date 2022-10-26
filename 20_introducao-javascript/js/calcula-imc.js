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

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);

    if (!pesoValido) {
        tdPeso.textContent = "Peso inválido!";
        pesoValido = false;
        paciente.classList.add("paciente-invalido")
    }

    if (!alturaValida) {
        tdAltura.textContent = "Altura inválida!";
        alturaValida = false;
        paciente.classList.add("paciente-invalido")
    }

    if (alturaValida && pesoValido) {
        let imc = calculaImc(peso, altura)
        
        tdImc.textContent = imc;    
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura < 3) {
        return true;
    } else {
        return false
    }
}

function calculaImc(peso, altura) {
    let imc = 0
    imc = peso / (altura * altura);
    return imc.toFixed(2)
}

