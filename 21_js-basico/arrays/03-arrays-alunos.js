const alunos = ['João', 'Juliana', 'Ana', 
                'Caio', 'Lara', 'Marjorie', 
                'Guilherme', 'Aline', 'Fabiana', 
                'Andre', 'Carlos', 'Paulo', 'Bia', 
                'Vivian', 'Isabela', 'Vinícius', 
                'Renan', 'Renata', 'Daisy', 'Camilo']

alunos.splice(18, 2, "Matheus", "José") // remove 2 itens do array a partir do indice 18 E ADICIONA matheus e josé 

const sala1 = alunos.slice(0, alunos.length / 2) //slice nao altera o array original, mas sim cria um novo ~~ não considera o 10
const sala2 = alunos.slice(alunos.length / 2) // quando nao passar o 2 parametro, vai até o fim

console.log(sala1)

console.log(sala2)