import { negociacoesDoDia } from "../interfaces/negociacaoDoDia.js";
import { Negociacao } from "../models/negociacao.js";

export class negociacoesService {

    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch("http://localhost:8080/dados")
            .then(res => res.json())
            .then((dados: negociacoesDoDia[]) => {
                return dados.map(dadoDeHoje => {
                    return new Negociacao(
                        new Date(), 
                        dadoDeHoje.vezes, 
                        dadoDeHoje.montante
                    )
                })
            })
    }
}