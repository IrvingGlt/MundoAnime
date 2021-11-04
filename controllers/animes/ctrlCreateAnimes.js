const {createAnimes} = require('../../services/animes/createAnimes')

async function ctrlCreateAnimes(req, res){
  try {
  const {name, genre, pDate,chapters, status, picture} = req.body
  
  const animex = await createAnimes({name, genre, pDate,chapters, status, picture})
  return res.status(200).send(animex)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlCreateAnimes}
