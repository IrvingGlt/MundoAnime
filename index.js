const routerApi = require('./routes')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send('Hi body! Welcome to node and express js')
})


routerApi(app)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)    
})