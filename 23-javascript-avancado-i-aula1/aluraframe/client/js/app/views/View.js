class View {

    constructor(elemento) {

        this._elemento = elemento;
    }

    template() {
        //deixamos essa mensagem de erro para caso não seja implementado um template nas classes filho (nesse caso, no MensagemView e NegociacoesView)
        //quando colocado um template nas classes filho, essa mensagem de erro é sobrescrita!
        throw new Error("O método template deve ser implementado")
    }

    update(model) {

        this._elemento.innerHTML = this.template(model);
    }
}