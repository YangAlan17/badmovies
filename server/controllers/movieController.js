const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');
const axios = require('axios');
const API_KEY = require('../../config.js').API_KEY;
//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre
    // https://www.themoviedb.org/account/signup
    // get your API KEY
    // use this endpoint to search for movies by genres, you will need an API key
    // https://api.themoviedb.org/3/discover/movie
    // and sort them by horrible votes using the search parameters in the API
    console.log(req.query.genre);
    var url = `https://api.themoviedb.org/3/discover/movie?with_genres=${
      req.query.genre
    }&sort_by=vote_average.asc&vote_count.gte=100`;
    axios
      .get(url, { params: { api_key: API_KEY } })
      .then(({ data }) => {
        res.send(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    axios
      .get('https://api.themoviedb.org/3/genre/movie/list', {
        params: { api_key: API_KEY }
      })
      .then((response) => {
        // console.log(response.data.genres);
        res.send(response.data.genres);
        // movieModel.genres.post(res.data.genres, (err, results) => {
        //   movieModel.genres.get((err, results) => {
        //     console.log(results);
        //   });
        // });
        // render genres as list
        // console.log(res.data.genres);
      })
      .catch((err) => {
        console.error(err);
      });
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
    // send back
  },
  saveMovie: (req, res) => {},
  deleteMovie: (req, res) => {}
};
