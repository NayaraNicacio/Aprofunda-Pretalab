import express from 'express';


// precisa exportar o app para usar no test
export const app = express();

const porta = 3000;

app.get('/', (req, res)=>{
    res.send('Hello, Typescript + Express');
});

// so vai ser chamado com npm start para não atrapalhar o test
if (require.main === module){
    const server = app.listen(porta, () => {
        console.log(`Server is listing on port ${porta}`);
      });
     server.on('error', e => console.error("Error", e));
}
