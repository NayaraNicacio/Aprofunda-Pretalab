const express = require('express')
const router = express.Router()

const app= express()

const ola = router.get('/ola', (req, res) => {
    res.send("Olá Mundo, Bem Vinda Programadora !!!")
})

app.use(ola)
app.listen(3335, console.log('Servidor Rodando'))