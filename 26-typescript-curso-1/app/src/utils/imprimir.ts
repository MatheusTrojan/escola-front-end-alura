import { imprimivel } from "./imprimivel.js";

export function imprimir(...objetos: imprimivel[]) {
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}