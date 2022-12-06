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
            "adiciona", "esvazia", "ordena", "inverteOrdem");
        
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            "texto");

        this._service = new NegociacaoService();

        this._init();
    }

    _init() {

        this._service
            .lista()
            .then(negociacoes => 
                negociacoes.forEach(negociacao => 
                    this._listaNegociacoes.adiciona(negociacao)
                ))
            .catch(erro => this._mensagem.texto = erro)

        setInterval(() => {
            this.importaNegociacoes()
        }, 3000);
    }
    
    adiciona(event) {
        event.preventDefault();

        let negociacao = this._criaNegociacao();

        this._service
            .cadastra(negociacao)
            .then(mensagem => {
                this._listaNegociacoes.adiciona(negociacao)
                this._mensagem.texto = mensagem
                this._limpaFormulario()
            })
            .catch(erro => this._mensagem.texto = erro)

    }

    importaNegociacoes() {

        this._service
            .obterNegociacoes()
            .then(negociacoes => 
                negociacoes.filter(negociacao => 
                    !this._listaNegociacoes.negociacoes.some(negociacaoExistente => 
                        JSON.stringify(negociacao) == JSON.stringify(negociacaoExistente))
                    )
            )
            .then(negociacoes => {negociacoes.forEach(negociacao => 
                this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociações do período importadas com sucesso!';
            })
            .catch(erro => this._mensagem.texto = erro);  
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
        this._service
            .apaga()
            .then(mensagem => {
                this._mensagem.texto = mensagem;
                this._listaNegociacoes.esvazia();  
            })
            .catch(erro => this._mensagem.texto = erro);
    }
    
    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value));    
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
