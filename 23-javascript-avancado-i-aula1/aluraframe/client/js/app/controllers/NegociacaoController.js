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
        // esses split e map para mostrar a data no formato desejado (subtraindo 1 indice do mês para dar certo)
        let dataArrumada = new Date(...
            this._inputData.value
                .split("-")
                .map((item, indice) => indice == 1 ? item - 1 : item)
        );

        // console.log(data)
        
        let negociacao = new Negociacao(
            dataArrumada,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao)

        // adicionar a negociação em um lista
    }
}