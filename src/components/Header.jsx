import React from 'react';
import { Link } from 'react-router-dom';
import Carregando from '../pages/Carregando';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      people: '',
    };
  }

  async componentDidMount() {
    const { name } = await getUser();
    this.setState({ people: name });
  }

  render() {
    const { state } = this;
    return (
      <header data-testid="header-component">
        {state.people
          ? <h1 data-testid="header-user-name">{ state.people }</h1>
          : <Carregando />}
        <Link data-testid="link-to-search" to="/search">Search</Link>
        <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
        <Link data-testid="link-to-profile" to="/profile">Profile</Link>
      </header>
    );
  }
}

export default Header;
