const Animes = require('../../models/animes')
const { config } = require('../../config/index')

async function deleteAnimes(){
  try { 

    const anime = await Animes.deleteOne({_id:config.dbIdMundoAnime})

return anime
} catch(error){
  return {message: error.message}
}
}

module.exports = {deleteAnimes}