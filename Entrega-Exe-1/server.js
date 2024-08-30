const express = require('express')
const cors = require('cors')
const router = express.Router()
const listaLivros = ('./Livros.json')


const app = express()
app.use(cors())
const PORT = 3333

// rota get
router.get('/Livros', (req, res) =>{
    res.json(listaLivros)
})

app.use(router)
app.listen(console.log("Servidor Rodando na porta ", PORT))