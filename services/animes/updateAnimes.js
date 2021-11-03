const Animes = require('../../models/animes')
const { config } = require('../../config/index')

async function updateAnimes(){
  try {
  

const anime = await Animes.updateOne({_id:config.dbIdMundoAnime},
  {
    $set:{
      name: 'Mushoku Tensei',
      genre: 'Isekai'      
    }
  })

return anime
} catch(error){
  return {message: error.message}
}
}

module.exports = {updateAnimes}