import request from 'supertest'
import { app }  from './index'
import { describe } from 'node:test'



describe('Testando Api de Blog', ()=> {

    describe ('sucesso', () => {

        it('deve ser capaz de criar um novo texto', async()=>{

        const response= await request(app).post('/texts').send ({ 
            title: "meu",
            content: "conteudo",
            status: "rascunho",
            author: "Nayara"

       })

        expect(response.status).toBe(201)
        expect(response.body.message).toBe('Texto criado com sucesso')

        })

    })

})

