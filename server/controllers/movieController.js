const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    apiHelpers
      .getSearch(req.query.genre)
      .then(({ data }) => {
        res.send(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getGenres: (req, res) => {
    apiHelpers
      .getGenres()
      .then((response) => {
        res.send(response.data.genres);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  saveMovie: (req, res) => {
    movieModel.saveMovie();
  },
  deleteMovie: (req, res) => {}
};
