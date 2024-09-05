const express = require('express')
const cors = require('cors')
const router = express.Router()
const listEndpoints = require("express-list-endpoints")
const listaLivros = require('./Livros.json')


const app = express();
app.use(express.json());
app.use(cors())
const PORT = 3333

const novolivro = []

// rota get
app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor Express!');
});
 

app.get('/Livros', (req, res) => {
    res.json(listaLivros);
});


app.post('/novolivro', (req, res) => {
    const livro = {
        id: req.body.id,
        autor: req.body.autor, // Convencionalmente, use letras minúsculas
        titulo: req.body.titulo
    };

    novolivro.push(livro); // Adiciona o novo livro à lista
    res.json(novolivro); // Retorna a lista atualizada
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(listEndpoints(app));
});
