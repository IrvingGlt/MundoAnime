const {updateUsuarios} = require('../../services/usuarios/updateUsuarios')

async function ctrlUpdateUsuarios(req, res){
  try {
  const {id} = req.query
  console.log('Actualización Realizada')
  const usuariosx = await updateUsuarios(id)
  return res.status(200).send(usuariosx)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlUpdateUsuarios}
