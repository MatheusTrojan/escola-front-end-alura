import { inspect } from "../decorators/inpect.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";

export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique.`)
        }
    }

    protected abstract template(model: T): string;

    // @logarTempoExecucao(true)
    // @inspect()
    public update(model: T): void {

        let template = this.template(model);
        this.elemento.innerHTML = template;      
    }
}