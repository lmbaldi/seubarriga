const supertest = require('supertest');

const request = supertest('http://www.google.com');

test('Deve responder na porta 3001', () => {
    //acessar a  url http://localhost:3001
    request.get('/').then( res => expect(res.status).toBe(200));
    //deve verificar que a resposta foi 200
});