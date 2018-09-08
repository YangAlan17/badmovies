//SELECT one db to work with
//For SQL
// const sqlDb = require('../../db/sql');
//For Mongo
const mongoDb = require('../../db/mongodb');

module.exports = {
  saveMovie: (movie) => {
    return mongoDb.Movies.findOneAndUpdate(
      { name: movie.title },
      {
        title: movie.title,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        poster_path: movie.poster_path
      },
      { upsert: true }
    );
  },
  getMovies: () => {},
  deleteMovie: () => {}
};
