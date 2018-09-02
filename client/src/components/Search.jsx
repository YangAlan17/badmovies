import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      genre: '28'
    };
    this.getGenres = this.getGenres.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.getGenres();
  }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios
      .get('/movies/genres')
      .then((res) => {
        console.log(res.data);
        this.setState({
          genres: res.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleChange(evt) {
    console.log(evt.target.value);
    this.setState({
      genre: evt.target.value
    });
  }

  handleSearch() {
    console.log(this.state.genre);
    this.props.getMovies(this.state.genre);
  }

  render() {
    return (
      <div className="search">
        <button
          onClick={() => {
            this.props.swapFavorites();
          }}
        >
          {this.props.showFaves ? 'Show Results' : 'Show Favorites'}
        </button>
        <br />
        <br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select value={this.state.genre} onChange={this.handleChange}>
          {this.state.genres.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <br />
        <br />

        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Search;
