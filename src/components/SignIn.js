import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import UserAuth from '../services/UserAuth';
import Flash from '../shared_components/Flash';

class SignIn extends Component {
  state = {
    redirectToReferrer: false,
    invalidCredentials: false,
    email: '',
    password: '',
  };

  login = event => {
    event.preventDefault();
    UserAuth.authenticate(this.state.email, this.state.password)
      .then(() => {
        this.setState({ redirectToReferrer: true });
      })
      .catch(() => {
        this.setState({ invalidCredentials: true });
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const from = { pathname: '/style_guide' };
    const { redirectToReferrer, invalidCredentials } = this.state;
    const { onChangePanel } = this.props;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className="sign-in">
        <div className="container">
          <form className="panel small-padding white-bg" onSubmit={this.login}>
            <h2 className="small-margin-bottom">Iniciar sesión en TANDITAPP</h2>
            <label>Email:</label>
            <input
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
            />
            <label>Password:</label>
            <input
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
            <div className="text-center">
              {invalidCredentials && <Flash type="error">Invalid Credentials</Flash>}
              <button className="button primary" type="submit">
                Iniciar Sesión
              </button>
              <p className="text-center small-margin-top">
                ¿No tienes cuenta?{' '}
                <a
                  className="green-text-color"
                  onClick={onChangePanel}
                  name="signup"
                >
                  Regístrate aquí.
                </a>
              </p>
              <p className="text-center small-margin-top">
                ¿Y mi código de confirmación?{' '}
                <a
                  className="green-text-color"
                  onClick={onChangePanel}
                  name="resend"
                >
                  Solicita uno aquí.
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
