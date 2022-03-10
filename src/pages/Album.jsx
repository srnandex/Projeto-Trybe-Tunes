import React from 'react';
import PropTypes from 'prop-types';
import musicsAPI from '../services/musicsAPI';
import Carregando from './Carregando';
import MusicCard from '../components/MusicCard';
import Header from '../components/Header';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      nameAlbum: '',
      nameArtist: '',
      listMusics: [],
      carregar: true,
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const musicas = await musicsAPI(id);
    const alb = musicas[0].collectionName;
    const art = musicas[0].artistName;
    const List = [...musicas.slice(1)];
    this.setState({
      listMusics: List,
      carregar: false,
      nameAlbum: alb,
      nameArtist: art,
    });
  }

  render() {
    const { state } = this;
    console.log(state.listMusics);
    return (
      <div data-testid="page-album">
        <header>
          <Header />
        </header>
        <section>
          <h2 data-testid="album-name">{ state.nameAlbum }</h2>
          <h3 data-testid="artist-name">{ state.nameArtist }</h3>
          {state.carregar ? <Carregando /> : state.listMusics.map((elemet) => (
            <MusicCard
              key={ elemet.trackId }
              trName={ elemet.trackName }
              previewUrl={ elemet.previewUrl }
            />
          ))}
        </section>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default Album;
