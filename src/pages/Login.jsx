import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div data-testid="page-login">
        <input type="text" data-testid="login-name-input" />
        <button data-testid="login-submit-button" type="submit">Entrar</button>
      </div>
    );
  }
}

export default Login;
