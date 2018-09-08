const mongoose = require('mongoose');
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(
    'mongodb://localhost:27017/badmovies',
    { useNewUrlParser: true }
  );
}

const db = mongoose.connection;

mongoose.Promise = Promise;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to db...');
});

let movieSchema = mongoose.Schema({
  title: String,
  release_date: String,
  vote_average: Number,
  poster_path: String
});

let Movies = mongoose.model('Movies', movieSchema);

module.exports.db = db;
module.exports.Movies = Movies;
