class DateHelper {

    constructor() {

        throw new Error("Esta classe não pode ser instanciada!")
    }

    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    }

    static textoParaData(texto) {

        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error ("Deve estar no formato AAAA-MM-DD")

        // esses split e map para mostrar a data no formato desejado (subtraindo 1 indice do mês para dar certo)

        return new Date(...texto.split("-").map((item, indice) => indice == 1 ? item - 1 : item))

    }
}

// static são métodos invocados diretamente na classe, não precisa ter uma instância da classe para trabalhar com ele