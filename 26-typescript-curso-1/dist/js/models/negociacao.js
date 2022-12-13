export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const CopiaData = new Date(this._data.getTime());
        return CopiaData;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
