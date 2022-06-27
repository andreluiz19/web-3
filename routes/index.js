const { Router } = require('express')

const UserController = require('../controllers/UserController')
const SessionController = require('../controllers/Login')
const MovieController = require('../controllers/MovieController')
const { authenticate } = require('../Middlewares')

const routes = Router()

routes.get('/', (req, res) => {
  res.send('Olá mundo')
  //res.render('../index.html')
})

routes.post('/users', UserController.createUser) //Criar usuário
routes.get('/users', UserController.getUsers) //Listar usuários

routes.post('/cadastrar', UserController.createUser)

routes.get('/users/:user_id', UserController.getUserById) //Listar usuário por ID

routes.post('/sessions', SessionController.createSession) //Login

routes.post('/movies/:user_id', authenticate, MovieController.createMovie) //Criar filme
routes.get('/:user_id/movies', MovieController.getUserMovies) //Listar filmes
routes.put('movies/:user_id/:movie_id',authenticate, MovieController.updateMovie) //Atualizar Filme
routes.delete('/movies/:user_id/:movie_id',authenticate,MovieController.deleteMovie) //Deletar filme

routes.get('/movies', MovieController.getMovies) //Lista todos os filmes
routes.get('/movies/:movie_id', MovieController.getMovieById) //Listar filmes por ID

module.exports = routes
