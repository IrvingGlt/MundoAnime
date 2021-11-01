const Animes = require('../../models/animes')

async function selectAnimes(genre){
  try {
  console.log('Hola desde el servicio')
  console.log(genre)

const anime = !genre ? await Animes.find(): await Animes.find({genre})
console.log(anime)
return anime
} catch(error){
  return {message: error.message}
}
}

module.exports = {selectAnimes}
