const {deleteAnimes} = require('../../services/animes/deleteAnimes')

async function ctrlDeleteAnimes(req, res){
  try {
  const {_id} = req.params
  const productox = await deleteAnimes(_id)
  return res.status(200).send(productox)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlDeleteAnimes}

