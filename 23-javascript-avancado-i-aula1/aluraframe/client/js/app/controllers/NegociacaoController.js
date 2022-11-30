class NegociacaoController {
    
    constructor() {
        
        // quando jogamos o querySelector para uma variavel, ele perde o contexto do "document", o THIS não apontaria mais para o "document"... então usamos o BIND para o $ fazer a referência ao "document" novamente (parecido com Jquery)
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._ordemAtual = '';  

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            "adiciona", "esvazia", "ordena", "inverteOrdem")
        
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            "texto")
    }
    
    adiciona(event) {
        
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());        
        this._mensagem.texto = 'Negociação adicionada com sucesso';        
        this._limpaFormulario();   
    }

    importaNegociacoes() {

        let service = new NegociacaoService();
        service

        // TERCEIRA REFATORAÇÃO
        .obterNegociacoes()
        .then(negociacoes => {
          negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
          this._mensagem.texto = 'Negociações do período importadas com sucesso';
        })
        .catch(error => this._mensagem.texto = error);  
    }

        // SEGUNDA REFATORAÇÃO
        // Promise.all([
        //     service.obterNegociacoesDaSemana(),
        //     service.obterNegociacoesDaSemanaAnterior(),
        //     service.obterNegociacoesDaSemanaRetrasada()
        // ])
        // .then(negociacoes => {
        //     negociacoes
        //         .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
        //         .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
        //     this._mensagem.texto = "Negociações importadas com sucesso"
        // })
        // .catch(erro => this._mensagem.texto = erro);

        // PRIMEIRA REFATORAÇÃO COM PROMISE
        // service.obterNegociacoesDaSemana()
        //     .then(negociacoes => {
        //         negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
        //         this._mensagem.texto = "Negociações da semana obtidas com sucesso!";
        //     })
        //     .catch(erro => this._mensagem.texto = erro);

        // service.obterNegociacoesDaSemanaAnterior()
        //     .then(negociacoes => {
        //         negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
        //         this._mensagem.texto = "Negociações da semana anterior obtidas com sucesso!";
        //     })
        //     .catch(erro => this._mensagem.texto = erro);
        
        // service.obterNegociacoesDaSemanaRetrasada()
        //     .then(negociacoes => {
        //         negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
        //         this._mensagem.texto = "Negociações da semana retrasada obtidas com sucesso!";
        //     })
        //     .catch(erro => this._mensagem.texto = erro);

        // COMO ERA ANTES ANTES 
        // service.obterNegociacoesDaSemana((erro, negociacoes) => {

        //     if(erro) {

        //         this._mensagem.texto = erro;
        //         return;
        //     }

        //     negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
        //     this._mensagem.texto = "Negociações importadas com sucesso!"
        // });
    
    apaga() {
        
        this._listaNegociacoes.esvazia();         
        this._mensagem.texto = 'Negociações apagadas com sucesso';
    }
    
    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);    
    }
    
    _limpaFormulario() {
     
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }

    ordena(coluna) {
        if(this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);    
        }
        this._ordemAtual = coluna;
    }
}
