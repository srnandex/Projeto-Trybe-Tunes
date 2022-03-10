import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { trName, previewUrl } = this.props;
    return (
      <div>
        <p>{ trName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
};
export default MusicCard;
