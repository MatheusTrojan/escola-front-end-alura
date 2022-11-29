class ListaNegociacoes {

    constructor(contexto, armadilha) {

        this._negociacoes = [];
        this._armadilha = armadilha;
        this._contexto = contexto;
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
        // this._armadilha(this);
        Reflect.apply(this._armadilha, this._contexto, [this])
    }

    get negociacoes() {

        return [].concat(this._negociacoes);
    }

    esvazia() {

        this._negociacoes = [];
        // this._armadilha(this);
        Reflect.apply(this._armadilha, this._contexto, [this])
        // tivemos que criar esse reflect apply por causa do escopo do this, onde no NegociacaoController ele estava sendo chamado para Lista Negociação quando queriamos que fosse para o controller >>> this._listaNegociacoes = new ListaNegociacoes(this, function(model) <<<
    }
}