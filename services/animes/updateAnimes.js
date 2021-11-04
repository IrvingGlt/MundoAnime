const Animes = require('../../models/animes')

async function updateAnimes({_id,name, genre}){
  try {
    console.log('Hola desde el servicio')
    console.log(_id)
    const animeUpdated = await Animes.findOneAndUpdate(
      {_id},
      {name,genre},
      {new: true}
    )
console.log(animeUpdated)
return animeUpdated
} catch(error){
  return {message: error.message}
}
}

module.exports = {updateAnimes}