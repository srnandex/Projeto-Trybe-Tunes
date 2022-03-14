import React from 'react';
import PropTypes from 'prop-types';
import musicsAPI from '../services/musicsAPI';
import Carregando from './Carregando';
import MusicCard from '../components/MusicCard';
import Header from '../components/Header';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      nameAlbum: '',
      nameArtist: '',
      listMusics: [],
      carregar: true,
      favmu: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const musicas = await musicsAPI(id);
    const favMu = await getFavoriteSongs();
    const alb = musicas[0].collectionName;
    const art = musicas[0].artistName;
    const List = [...musicas.slice(1)];
    this.setState({
      listMusics: List,
      carregar: false,
      nameAlbum: alb,
      nameArtist: art,
      favmu: favMu,
    });
  }

 addFav = async ({ target }) => {
   const { state } = this;
   if (target.checked === false) {
     const intnu = parseInt(target.id, 10);
     const reFav = state.listMusics.find((ele) => ele.trackId === intnu);
     this.setState({ carregar: true });
     await removeSong(reFav);
     const refavMu = await getFavoriteSongs();
     this.setState({ carregar: false, favmu: refavMu });
   } else {
     const tarNun = parseInt(target.id, 10);
     const favMusic = state.listMusics.find((ele) => ele.trackId === tarNun);
     this.setState({ carregar: true });
     await addSong(favMusic);
     const favMu = await getFavoriteSongs();
     this.setState({ carregar: false, favmu: favMu });
   }
 }

 render() {
   const { state } = this;
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
             fav={ this.addFav }
             muFav={ state.favmu }
             trackId={ elemet.trackId }
             trackName={ elemet.trackName }
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
