import React from 'react';
import Header from '../components/Header';
import Carregando from './Carregando';
import Albuns from '../components/Albuns';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      artist: '',
      albunsArtist: [],
      habilitedBtn: true,
      carregar: false,
      carregarAlbum: false,
      notAlbun: false,
    };
  }

  btnHabi = ({ target }) => {
    const minNum = 2;
    if (target.value.length >= minNum) {
      this.setState({
        habilitedBtn: false,
        artist: target.value,
      });
    } else {
      this.setState({
        habilitedBtn: true,
      });
    }
  };

  btnPesquisar = async (event) => {
    const { state } = this;
    event.preventDefault();
    this.setState({
      carregar: true,
      albunsArtist: [],
    });
    document.getElementById('clearInput').value = '';
    const apiArtirt = await searchAlbumsAPI(state.artist);
    if (apiArtirt.length > 0) {
      this.setState({
        carregar: false,
        carregarAlbum: true,
        albunsArtist: apiArtirt,
      });
    } else {
      this.setState({
        notAlbun: true,
        carregar: false,
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
            id="clearInput"
            type="text"
            onChange={ this.btnHabi }
          />
          <button
            data-testid="search-artist-button"
            type="submit"
            onClick={ this.btnPesquisar }
            disabled={ state.habilitedBtn }
          >
            Pesquisar

          </button>
        </form>
        {state.carregar && <Carregando />}
        { state.notAlbun && <h2>Nenhum álbum foi encontrado</h2> }
        {state.carregarAlbum && (
          <h2>
            Resultado de álbuns de:
            {' '}
            { state.artist }
          </h2>)}
        {state.carregarAlbum && state.albunsArtist.map((element) => (
          <Albuns
            key={ element.collectionId }
            collectionId={ element.collectionId }
            imageThum={ element.artworkUrl100 }
            nameArt={ element.artistName }
            nameAlb={ element.collectionName }
          />
        ))}
      </div>
    );
  }
}

export default Search;
