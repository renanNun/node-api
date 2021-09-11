const supertest = require('supertest')
const index = require('../index')

test('Pegar todos os usuários', async () => {
  const response = await supertest(index)
    .get('/users')

  expect(response.statusCode).toEqual(200)
})

test('Cadastrar um usuário', async () => {
  const response = await supertest(index)
    .post('/users')
    .send({
      name: 'Super Usuário',
      email: 'superusuario@gmail.com',
      password: 'cavalodeTeta123',
      confirmedPassword: 'cavalodeTeta123'
    })

  expect(response.statusCode).toEqual(201)
})

test('Deletar um Usuário', async () => {
  const response = await supertest(index)
    .delete('/users/49')

  expect(response.statusCode).toEqual(204)
})
