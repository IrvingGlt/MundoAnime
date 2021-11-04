const Animes = require('../../models/animes')

async function deleteAnimes(_id){
  try {
    const animeDeleted = await Animes.deleteOne( {_id})
console.log(animeDeleted)
if (animeDeleted.deletedCount == 0)
return {usuariosDeleted: animeDeleted.deletedCount, message:'Anime no encontrado'}
else return {usuariosDeleted: animeDeleted.deletedCount, message: 'Anime eliminado'}
} catch(error){
  return {message: error.message}
}
}

module.exports = {deleteAnimes}
