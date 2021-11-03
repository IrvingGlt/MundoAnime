const {deleteUsuarios} = require('../../services/usuarios/delteUsuarios')

async function ctrlDeleteUsuarios(req, res){
  try {
  const {id} = req.query
  console.log('Delete Realizado')
  const usuariosx = await deleteUsuarios(id)
  return res.status(200).send(usuariosx)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlDeleteUsuarios}
