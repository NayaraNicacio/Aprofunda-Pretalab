const blogRoutes = require('../Entrega-Exe-3/src/routes/blogRoutes')
const cors = require("cors");
const express = require("express");
const listEndpoints = require("express-list-endpoints")

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(cors());
app.use(blogRoutes);

app.listen(PORT, console.log(`Servidor rodando na porta ${PORT}`))
console.log(listEndpoints(app));