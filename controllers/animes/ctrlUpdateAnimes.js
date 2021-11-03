const {updateAnimes} = require('../../services/animes/updateAnimes')

async function ctrlUpdateAnimes(req, res){
  try {
  const {id} = req.query
  console.log('Actualización Realizada')
  const animex = await updateAnimes(id)
  return res.status(200).send(animex)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlUpdateAnimes}