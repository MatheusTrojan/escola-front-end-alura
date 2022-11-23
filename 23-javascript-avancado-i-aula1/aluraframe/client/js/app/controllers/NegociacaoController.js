class negociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document)

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

    }

    adiciona(event) {
        event.preventDefault()

        // console.log(typeof(this._inputData.value)) << para descobrir o tipo da data que estamos recebendo

        let data = new Date(this._inputData.value.replace(/-/g, ","));
        console.log(data)
        
        // let negociacao = new Negociacao(
        //     this._inputData.value,
        //     this._inputQuantidade.value,
        //     this._inputValor.value
        // );

        // console.log(negociacao)

        // adicionar a negociação em um lista
    }
}