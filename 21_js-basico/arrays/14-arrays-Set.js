const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes); //new Set cria um Set sem valores repetidos, porém ainda precisamos transformar ele de volta em array

const nomesAtualizados = [...meuSet]; // podemos usar o spread operator novamente para espalhar os itens do Set

console.log(nomesAtualizados)