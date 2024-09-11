import express, {Request, Response} from 'express';
import { v4 as uuidv4} from 'uuid';
import slug from 'slug';

export const app = express();
app.use(express.json());

interface Text {
    id: string
    title:string
    content:string
    slug: string
    created_at:string
    author:string
}

const textList: Text[] = []

app.post('/textos', (req: Request, res: Response) => {
const { title, content, status, author } = req.body

const newText: Text = {
    id: uuidv4(),
    title: title,
    slug: slug(title),
    content: content,
    author: author,
    created_at: new Date().toLocaleString('pt-br')
}

textList.push(newText)
res.status(200).json({ message: `Text ${title} criado com sucesso`})
})

app.get('/texts', (req:Request, res: Response) => {
    res.json(textList)
})

if(require.main === module){
    const PORT = 3333
    app.listen(PORT,()=>{
        console.log(`Servidor rodando na porta ${PORT}`)
    })
}
