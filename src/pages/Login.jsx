import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Carregando from './Carregando';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      carregar: false,
      redirecionar: false,
      nameU: '',
      buttonDisable: true,
    };
  }

habilitedButton = ({ target }) => {
  const nameNum = target.value;
  const minNum = 3;
  if (nameNum.length >= minNum) {
    this.setState({
      buttonDisable: false,
      nameU: target.value,
    });
  } else {
    this.setState({
      buttonDisable: true,
    });
  }
}

clickButton = async () => {
  const { state } = this;
  this.setState({ carregar: true });
  await createUser({ name: state.nameU });
  this.setState({ carregar: false, redirecionar: true });
};

render() {
  const { state } = this;
  return (
    <div data-testid="page-login">
      { state.carregar ? <Carregando />
        : (
          <>
            <input
              onChange={ this.habilitedButton }
              type="text"
              data-testid="login-name-input"
            />
            <button
              disabled={ state.buttonDisable }
              data-testid="login-submit-button"
              onClick={ this.clickButton }
              type="submit"
            >
              Entrar
            </button>
            { state.redirecionar && <Redirect to="/search" /> }
          </>
        )}
    </div>
  );
}
}

export default Login;
