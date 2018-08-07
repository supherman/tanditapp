import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import UserAuth from '../services/UserAuth';

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

  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: '/style_guide' },
    };
    const { redirectToReferrer, invalidCredentials } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className="container margin-auto">
        <form
          className="panel small-padding white-bg small-margin-top"
          onSubmit={this.login}
        >
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
          {invalidCredentials && <p>Invalid Credentials</p>}
          <button
            disabled={!this.validateForm()}
            className="button primary"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
