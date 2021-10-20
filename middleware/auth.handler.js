const { config } = require('../config/index')
const uAPIP = encodeURIComponent(config.dbApiPassword)
function checkApiKey(req, res, next){
    try{
        const apiKey = req.headers['api']
        if(apiKey == uAPIP) next()
        else throw { status: '401', message: 'No autorizado', eror: true}
    }catch(error){
        return res.status(error.status || 500).send({message: error.message})
    }
}

module.exports = { checkApiKey }