const {selectAnimes} = require('../../services/animes/selectAnimes')

async function ctrlSelectAnimes(req, res){
  try {
  const {genre} = req.query
  console.log('Hola desde el controlador')
  const animex = await selectAnimes(genre)
  return res.status(200).send(animex)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlSelectAnimes}
