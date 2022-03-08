import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      habilitedBtn: true,
    };
  }

  btnHabi = ({ target }) => {
    const minNum = 2;
    if (target.value.length >= minNum) {
      this.setState({
        habilitedBtn: false,
      });
    } else {
      this.setState({
        habilitedBtn: true,
      });
    }
  };

  render() {
    const { state } = this;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <input
            data-testid="search-artist-input"
            type="text"
            onChange={ this.btnHabi }
          />
          <button
            data-testid="search-artist-button"
            type="submit"
            disabled={ state.habilitedBtn }
          >
            Pesquisar

          </button>
        </form>
      </div>
    );
  }
}

export default Search;
