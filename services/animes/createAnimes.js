const Animes = require('../../models/animes')

async function createAnimes({name, genre, pDate, chapters, status,picture}){
  try {
    const animeCreated = await Animes.create({
      name,
      genre,
      pDate,
      chapters,
      status,
      picture
    })
console.log(animeCreated)
return animeCreated
} catch(error){
  return {message: error.message}
}
}

module.exports = {createAnimes}
