class Negociacao {
    
    constructor(data, quantidade, valor) {

        // underline na frente do nome como CONVENÇÃO de que o valor não deve ser alterado/acessado
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this) // congela o objeto, o tornando imutável (mas é uma proteção rasa, pode ser burlada, por isso fiz alterações no get data)
    }

    //metodos "acessadores" com o get >> apenas a classe acessa os dados
    // passando para GETTER, se torna apenas para leitura dos dados
    //mesmo que ainda seja possivel alterar o dados utilizando _, dificulta o acesso para quem tentar colocar uma quantidade diferente
    get volume() {
        return this._quantidade * this._valor
    }

    get data() {
        //retornamos um novo objeto que pega uma nova data baseada na que foi passada na Negociacao
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}