const {deleteAnimes} = require('../../services/animes/deleteAnimes')

async function ctrlDeleteAnimes(req, res){
  try {
  const {id} = req.query
  console.log('Delete Realizado')
  const animex = await deleteAnimes(id)
  return res.status(200).send(animex)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlDeleteAnimes}