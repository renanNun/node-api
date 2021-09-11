const supertest = require('supertest');
const index = require('../index');

test('Pegar todos os usuários', async () => {
    const response = await supertest(index)
        .get('/users');

    expect(response.statusCode).toEqual(200);
})

test('')