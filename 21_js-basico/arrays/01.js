// const numero; >> Erro de declaração da constante (const não pode ficar vazio)


// console.log >> exibe informações no console
// console.error() >> para exibir mensagens de erro;
// console.table() >> para visualizar de forma mais organizada informações tabulares;
// console.time() e console.timeEnd() >> para temporizar período que uma operação de código leva para ser iniciada e concluída;
// console.trace() >> para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.


// comparação implícita >> == compara o valor ; === compara o valor e tipo do dado

// comparação explícita >> operador ternário >> console.log(idade >= idadeMinima ? "pode beber" : "nao pode beber")
//                                                              condição             if true          if false


// template string >> substitui a concatenação utilizando várias vezes o simbolo de adição e variáveis, criando tudo na mesma frase com crase>>> `texto texto ${variavel} texto texto`


// três formas de escrever funções: 

//  1- function NomeDaFunção(parâmetros) {
//           função 
//      }

//  É possivel passar uma função como parâmetro da outra

// 2 - expressao de função (geralmente são funções anonimas) // não podemos chamar ela antes de declarar
// se eu chamasse um console.log(soma) antes de declarar a função daria erro
// const soma = function(num1, num2) {return num1 + num2}

// 3 - arrow function 
// const testeArrow = parametroNome => `meu nome é ${parametroNome}`
// const soma = (num1, num2) => num1 + num2

// 3.1 - arrow function com + de uma linha de codigo

const  somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente numeros de 1 a 9"
    } else {
        return num1 + num2
    }
}

console.log(somaNumerosPequenos(5, 1))

// Hoisting: arrow function se comporta como expressao