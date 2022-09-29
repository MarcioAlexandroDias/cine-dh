const catalogo = require('./database/filmes.json');

console.table(catalogo);
// id: filmes[filmes.length -1].id + 1 = id: filmes.at(-1).id + 1
const adicionarFilme = (titulo, duracao, atores, anoDeLancamento) => {
   const novoFilme = {
    id: catalogo.at(-1).id + 1,
    titulo,
    duracao,
    atores,
    anoDeLancamento,
    emCartaz: true 

   }
   return catalogo.push(novoFilme);
}

adicionarFilme("Dh teste", 3.33, ["Cassio", "Mario", "Wendel"], 2022);

console.log("Filme adicionado com sucesso")
console.table(catalogo)