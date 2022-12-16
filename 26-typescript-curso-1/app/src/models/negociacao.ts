import { imprimivel } from "../utils/imprimivel.js";

export class Negociacao implements imprimivel{

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) { }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    get data(): Date {
        const CopiaData = new Date(this._data.getTime())
        return CopiaData;
    }

    get volume(): number {
        return this.quantidade * this.valor
    }

    public paraTexto(): string{
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }
}