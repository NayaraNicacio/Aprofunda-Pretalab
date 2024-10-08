const express = require('express')
const cors = require('cors')
const {v4: uuidv4} = require('uuid')

const routerDisciplinas = express.Router()
const PORT = 3340

const app=express()
app.use(express.json())
app.use(cors())

const list = []

routerDisciplinas.get('/', (req, res) => {
    console.log("Servidor Rodando com Sucesso!")
})

routerDisciplinas.get('/disciplinas', (req, res) => {
    res.json(list)
})

routerDisciplinas.post('/disciplinas', (req, res) => {
    const novaDisciplina = {
        id:uuidv4(),
        titulo: req.body.titulo,
        modulo: req.body.modulo
    }
   const verificaSeExiste = list.find(item => item.titulo === req.body.titulo) 
    
   if(verificaSeExiste){
        return res.status(403).json({message: `Disciplina ${req.body.titulo} já existe`})
    }

    list.push(novaDisciplina)
    res.status(201).json({message: `Disciplina ${req.body.titulo} criada com sucesso!`})
})

routerDisciplinas.delete('/disciplina/:id', (req, res)=> {
    const listaAtualizada = list.filter(item => item.id !== req.parms.id)
    res.json(listaAtualizada)
})

routerDisciplinas.put('/disciplina/:id', (req, res) => {
    let encontraDisciplina = list.find(item => item.id === req.parms.id)

    if(!encontraDisciplina){
        res.status(404).json({ message: 'Item não encontrada. '})
    }

    encontraDisciplina.titulo = req.body.titulo
    encontraDisciplina.modulo = req.body.modulo

    res.json({message: `Disciplina ${req.body.titulo} alterada com sucesso!`})
})

routerDisciplinas.patch('/disciplina/:id', (req, res) => {
    const {titulo, modulo}= req.body;

    let encontraDisciplina = list.find(item => item.id === req.parms.id)

    if(!encontraDisciplina){
        res.status(404).json({ message: `Item não encontrado`})
    }

    if (titulo !=null){
        encontraDisciplina.titulo = titulo
    }
    if (modulo !=null){
        encontraDisciplina.modulo= modulo
    }
    res.json({message: `Disciplina ${titulo} alterada com sucesso!`})
    
})

app.use(routerDisciplinas)
app.listen(PORT, console.log(`Servidor Rodando na porta ${PORT}`))