import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      chek: false,
    };
  }

  async componentDidMount() {
    const { trackId, muFav } = this.props;
    const testChek = muFav.some((ele) => ele.trackId === trackId);
    if (testChek === true) {
      this.setState({ chek: true });
    } else {
      this.setState({ chek: false });
    }
  }

  render() {
    const { fav, trackName, previewUrl, trackId } = this.props;
    const { state } = this;
    return (
      <div>
        <p>{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ trackId }>
          Favorita
          <input
            data-testid={ `checkbox-music-${trackId}` }
            onChange={ fav }
            checked={ state.chek }
            type="checkbox"
            id={ trackId }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  fav: PropTypes.func.isRequired,
  muFav: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default MusicCard;
