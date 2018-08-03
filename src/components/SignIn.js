import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import UserAuth from './UserAuth';
import MainLayout from '../Layouts/Main';

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

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
    <div className="sign-in">
        <div className="container">
        <form
            className="panel small-padding white-bg"
            onSubmit={this.login}
        >
            <h2 className="small-margin-bottom">¿Ya tienes una cuenta?</h2>
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
                {invalidCredentials && <p>Invalid Credentials</p>}            
                <button className="button primary" type="submit">
                Iniciar Sesión
                </button>
                <p className="text-center small-margin-top">¿No tienes cuenta? <a className="green-text-color">Regístrate aquí.</a></p>
            </div>
        </form>
        </div>
    </div>
    );
  }
}

export default SignIn;
