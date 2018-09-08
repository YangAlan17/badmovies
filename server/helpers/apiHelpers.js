const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

module.exports = {
  getGenres: () => {
    // make an axios request to get the list of official genres
    return axios.get('https://api.themoviedb.org/3/genre/movie/list', {
      params: { api_key: API_KEY }
    });
  },
  getSearch: (genre) => {
    var url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&sort_by=vote_average.asc&vote_count.gte=100`;
    return axios.get(url, { params: { api_key: API_KEY } });
  }
};
