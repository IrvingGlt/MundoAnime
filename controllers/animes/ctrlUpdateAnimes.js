const {updateAnimes} = require('../../services/animes/updateAnimes')

async function ctrlUpdateAnimes(req, res){
  try {
  const {name, genre} = req.body
  const {_id} = req.params
  console.log('Actualización Realizada')
  const animex = await updateAnimes({name, genre, _id})
  return res.status(200).send(animex)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlUpdateAnimes}