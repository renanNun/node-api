const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/userController')

module.exports = app => {
  app.get('/users', getAllUsers) // Listar Todos os Usuários
  app.get('/users/:id', getUserById) // Busca um usuário especifico
  app.post('/users', createUser) // Cria um Usuário
  app.put('/users/:id', updateUser) // Atualiza um usuário
  app.delete('/users/:id', deleteUser) // Deleta um usuário especifico
}
