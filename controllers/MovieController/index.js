const Movie = require('../../models/Movie')
const { populate } = require('../../models/User')

const MovieController = {
  async createMovie(req, res) {
    const bodyData = req.body
    const { user_id } = req.params
    try {
      const data = { username: user_id, ...bodyData }
      const newMovie = await Movie.create(data)
      return res.status(200).json(newMovie)
    } catch (err) {
      return res.status(400).json(err)
    }
  },

  async getUserMovies(req, res) {
    const { user_id } = req.params
    try {
      const movieOfAnUser = await Movie.find({ username: user_id })
      return res.status(200).json(movieOfAnUser)
    } catch (err) {
      return res.status(400).json(err)
    }
  },

  async updateMovie(req, res) {
    const bodyData = req.body
    const { movie_id, user_id } = req.params
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(movie_id, bodyData, {new: true })
      return res.status(200).json(updatedMovie)
    } catch (err) {
      return res.status(400).json(err)
    }
  },

  async deleteMovie(req, res) {
    const { movie_id, user_id } = req.params
    try {
      const deletedMovie = await Movie.findByIdAndDelete(movie_id)
      return res.status(200).json(deletedMovie)
    } catch (err) {
      return res.status(400).json(err)
    }
  },

  async getMovies(req, res) {
    try {
      const movieName = req.query.name
      const movies = await Movie.find()

        const filteredList = []
        if(req.query.name !== ''){
          movies.forEach(movie => {
            if (movie.movieName.toLocaleLowerCase().search(movieName.toLocaleLowerCase()) > -1) {
              filteredList.push(movie)
            }
          })
        } 
      res.status(200).json(filteredList)
    } catch (err) {
      return res.status(400).json(err)
    }
  },

  async getMovieById(req, res) {
    const { movie_id } = req.params
    try {
      const movie = await Movie.findById(movie_id)
      return res.status(200).json(movie)
    } catch (err) {
      return res.status(400).json(err)
    }
  }
}

module.exports = MovieController
