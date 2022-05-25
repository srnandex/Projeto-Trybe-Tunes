import React from 'react';
import Header from '../components/Header';
import Carregando from './Carregando';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      favmu: [],
    };
  }

  async componentDidMount() {
    const favMmu = await getFavoriteSongs();
    this.setState({ favmu: favMmu });
  }

  render() {
    const { state } = this;
    return (
      <div data-testid="page-favorites">
        <Header />
        {state.carregar ? <Carregando /> : state.favmu.map((elemet) => (
          <MusicCard
            key={ elemet.trackId }
            fav={ this.addFav }
            muFav={ state.favmu }
            trackId={ elemet.trackId }
            trackName={ elemet.trackName }
            previewUrl={ elemet.previewUrl }
          />
        ))}
      </div>
    );
  }
}

export default Favorites;
