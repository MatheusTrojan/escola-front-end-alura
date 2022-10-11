async function buscaEndereco(cep){
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error("CEP não existente!");
        }
        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        console.log(erro)
    }
}

var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value))

// .then(resposta => resposta.json())
// .then(r => {
//     if (r.erro) {
//         throw Error("Esse CEP não existe")
//     } else
//         console.log(r)})
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log("Processamento concluído!"));



// <<<< PARA FAZER VÁRIAS REQUISIÇÕES >>>>
// let ceps = ["01001000", "01001001"];
// let conjuntosCEPs = ceps.map(valores => buscaEndereco(valores));
// Promise.all(conjuntosCEPs).then(respostas => console.log(respostas));


//<<<<<<<<<<<<<<<<<<<<TESTANDO FILME>>>>>>>>>>>>>>>>>>>>>
// async function buscaFilme(){

//     var filme = await fetch("https://imdb-api.com/en/API/SearchMovie/k_o545bjp7/inception 2010")
//     var filmeEditado = await filme.json();
//     console.log(filmeEditado.results[0].image)
// }
// buscaFilme()
//<<<<<<<<<<<<<<<<<<<<TESTANDO FILME>>>>>>>>>>>>>>>>>>>>>
