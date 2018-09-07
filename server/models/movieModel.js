//SELECT one db to work with
//For SQL
const sqlDb = require('../../db/sql');
//For Mongo
// const mongoDb = require('../../db/mongodb')

module.exports = {
  // functionality
  genres: {
    post: (genres, callback) => {
      var queryString = 'INSERT INTO genres(genre_id, genre_name) value(?, ?)';
      // try promise.all later
      for (var i = 0; i < genres.length; i++) {
        sqlDb.query(queryString, [genres[i].id, genres[i].name], (err, results) => {
          callback(err, results);
        });
      }
    },
    get: (callback) => {
      sqlDb.query('SELECT * FROM genres', (err, results) => {
        callback(err, results);
      });
    }
  },
  favorites: {
    post: (movie, callback) => {
      var queryString = 'INSERT INTO movies(title, release_date, rating, poster) VALUE(?, ?, ?, ?)';
      var params = [movie.title, movie.release_date, movie.vote_average, movie.poster_path];
      console.log(params);
      sqlDb.query(queryString, params, (err, results) => {
        callback(err, results);
      });
    },
    get: (callback) => {
      sqlDb.query('SELECT * FROM movies', (err, results) => {
        callback(err, results);
      });
    }
  }
};

// get: (callback) => {
//   sqlDb.query('SELECT * FROM genres', (err, results) => {
//     callback(err, results);
//   });
// }

// get: () => {
//   return new Promise((resolve, reject) => {
//     sqlDb.query('some query', (err, results) => {
//       if (err) reject(err);
//       else resolve(results);
//     })
//   })
// }
