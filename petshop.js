let listaDePets = ['Bob', 'menino', 'tico'];

function addPet(nome) {
    listaDePets.push(nome);
    return `Pet ${nome} adicionado com sucesso!`
}
 function listarPets() {
     let lista = '';
     for (pet of listaDePets) {
        lista += `
            - - - - - - - - - - - - -
            Nome do pet: ${pet}
        `
     }
     return lista;
 }

 module.exports = { addPet, listarPets };