import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx';
import Movies from './components/Movies.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{ deway: 'movies' }],
      favorites: [{ deway: 'favorites' }],
      showFaves: false
    };

    // you might have to do something important here!
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
  }

  componentDidMount() {
    this.getMovies('28');
    axios.get('/movies/favorites').then((results) => {
      this.setState({
        favorites: results.data
      });
    });
  }
  getMovies(genre) {
    // make an axios request to your server on the GET SEARCH endpoint
    axios.get('/movies/search', { params: { genre: genre } }).then((movies) => {
      console.log(movies);
      // probs setstate here
      this.setState({
        movies: movies.data
      });
    });
  }

  saveMovie(movie) {
    // same as above but do something diff
    axios
      .post('/movies/save', { movie: movie })
      .then((results) => {
        console.log(results.data);
        this.setState({
          favorites: results.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  deleteMovie(movie) {
    // same as above but do something diff
    axios
      .delete(`/movies/delete/${movie.title}`)
      .then((results) => {
        console.log(results.data);
        this.setState({
          favorites: results.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render() {
    return (
      <div className="app">
        <header className="navbar">
          <h1>Bad Movies</h1>
        </header>

        <div className="main">
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            getMovies={this.getMovies}
          />
          <Movies
            movies={this.state.showFaves ? this.state.favorites : this.state.movies}
            showFaves={this.state.showFaves}
            saveMovie={this.saveMovie}
            deleteMovie={this.deleteMovie}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
