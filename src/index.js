const express = require('express')
const router = require('./routes/index.js')
const connectDb = require('./database/database.js')
// importando as bibliotecas necessarias apra facilitar o processo


const app = express()
app.use(express.json()) // para poder ler json
app.use('/', router)
const port = 3000

connectDb.connectDb().then(() => {
    console.log('Database connection is ready')
    app.listen(port, ()=>{
        console.log('Server running correctly')
    })

}).catch(error => {
    console.error(error)
    process.exit(-1)
}) 