const express = require('express')
const cors = require('cors')
const router = express.Router()
const listaLivros = ('./Livros.json')


const app = express();
app.use(express.json());
app.use(cors())
const PORT = 3333

// rota get
app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor Express!');
});

const getLivros = router.get('/Livros', (req, res) =>{
    res.json(listaLivros)
})

app.use(getLivros)
app.listen(console.log("Servidor Rodando na porta ", PORT))