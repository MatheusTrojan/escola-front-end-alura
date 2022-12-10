import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 20, 100);

console.log(negociacao.quantidade)

