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
  }
};
