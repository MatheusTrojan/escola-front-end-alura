export class Negociacao {

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get data(): Date {
        const CopiaData = new Date(this._data.getTime())
        return CopiaData;
    }

    get volume(): number {
        return this.quantidade * this.valor
    }
}