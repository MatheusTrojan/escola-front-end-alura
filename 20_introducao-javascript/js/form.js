let btnAdicionar = document.getElementById("adicionar-paciente")

btnAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    let form = document.querySelector("#form-adiciona");
    
    let paciente = obtemInformacoesDoForm(form);

    var erros = validaPaciente(paciente);
    console.log(erros)

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaNaTabela(paciente)

    form.reset();
    document.querySelector("#mensagens-erro").innerHTML = ""
})


function adicionaNaTabela(paciente) {
    let pacienteTr = montaTr(paciente);
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros) {
    let ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = ""

    erros.forEach(function(erro){
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li)
    })
}

function obtemInformacoesDoForm(form) {

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

function montaTr(paciente) {

    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    let nomeTd = montaTd(paciente.nome, "info-nome");
    let pesoTd = montaTd(paciente.peso, "info-peso");
    let alturaTd = montaTd(paciente.altura, "info-altura");
    let gorduraTd = montaTd(paciente.gordura, "info-gordura");
    let imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr;
}

function montaTd(dado, classe) {
    let td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe);

    return td
}

function validaPaciente(paciente) {
    let erros = []

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco!")
    }

    if (!validaPeso(paciente.peso)) erros.push ("Peso é inválido!");

    if (paciente.peso.length == 0){
        erros.push("Você deve informar o peso!")
    }

    if (!validaAltura(paciente.altura)) erros.push ("Altura é inválida!");

    if (paciente.altura.length == 0){
        erros.push("Você deve informar a altura")
    }

    if (paciente.gordura.length == 0){
        erros.push("Você deve preencher o campo de % de gordura!")
    }

    return erros;
}