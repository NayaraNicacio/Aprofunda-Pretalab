import {app} from "./app";
import request from "supertest";

describe('Testando a rota get', ()=>{
    it('Deve responder com Hello Typescript + Express', async () =>{
        const res = await request(app).get('/')
        expect(res.status).toBe(200)
        expect(res.text).toBe('Hello, Typescript + Express')
    })
})