import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Albuns extends React.Component {
  render() {
    const { collectionId, imageThum, nameArt, nameAlb } = this.props;
    return (
      <Link to={ `/album/${collectionId}` }>
        <div data-testid={ `link-to-album-${collectionId}` }>

          <img src={ imageThum } alt={ nameAlb } />
          <h3>{ nameAlb }</h3>
          <p>{ nameArt }</p>
        </div>
      </Link>
    );
  }
}

Albuns.propTypes = {
  collectionId: PropTypes.number.isRequired,
  imageThum: PropTypes.string.isRequired,
  nameArt: PropTypes.string.isRequired,
  nameAlb: PropTypes.string.isRequired,
};
export default Albuns;
