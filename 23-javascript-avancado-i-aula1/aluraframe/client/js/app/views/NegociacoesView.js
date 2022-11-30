class NegociacoesView extends View{

    constructor(elemento) {
        super(elemento);
    }

    template (model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th onclick="negociacaoController.ordena('data')">DATA</th>
                    <th onclick="negociacaoController.ordena('quantidade')">QUANTIDADE</th>
                    <th onclick="negociacaoController.ordena('valor')">VALOR</th>
                    <th onclick="negociacaoController.ordena('volume')">VOLUME</th>
                </tr>
            </thead>
                
            <tbody>
                ${
                    model.negociacoes.map( n => 
                        `
                            <tr>
                                <td>${DateHelper.dataParaTexto(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                            </tr>
                        ` 
                    ).join("") // o JOIN é necessário para unir o Array de strings em uma única string
                }
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>${
                    model.volumeTotal
                    // (function () {
                    //     let total = 0;
                    //     model.negociacoes.forEach( n => total += n.volume);
                    //     return total
                    // })() // IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
                    // Essa é uma alternativa, porém é menos verboso utilizar o reduce
                }</td>
            </tfoot>
        </table>
        `
    }
}