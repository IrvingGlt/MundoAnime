const {deleteUsuarios} = require('../../services/usuarios/deleteUsuarios')

async function ctrlDeleteUsuarios(req, res){
  try {
  const {email} = req.params
  const usuariosx = await deleteUsuarios(email)
  return res.status(200).send(usuariosx)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlDeleteUsuarios}
