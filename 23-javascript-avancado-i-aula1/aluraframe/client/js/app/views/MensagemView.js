class MensagemView extends View { //extends quer dizer que herda outra classe

    constructor(elemento) {
        super(elemento); // se recebemos um parâmetro no constructor, temos que chamar o constructor da classe pai passando o dado que a classe pai depende
    }

    template(model) {

        return model.texto ? `<p class='alert alert-info'>${model.texto}</p>` : "<p></p>"
    }
}