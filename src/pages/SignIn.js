import React from 'react';
import { Redirect } from 'react-router-dom';
import FakeAuth from '../components/FakeAuth';

class SignIn extends React.Component {
  state = {
    redirectToReferrer: false,
    invalidCredentials: false,
    email: '',
    password: '',
  };

  login = () => {
    FakeAuth.authenticate(this.state.email, this.state.password)
      .then(() => {
        this.setState({ redirectToReferrer: true });
      })
      .catch(() => {
        this.setState({ invalidCredentials: true });
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;
    const showMessage = this.state.invalidCredentials ? 'block' : 'none';

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className="container margin-auto">
        <div className="panel small-padding white-bg small-margin-top">
          <label>Email:</label>
          <input
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
            type="text"
          />
          <label>Password:</label>
          <input
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
          <p style={{ display: showMessage }}>Invalid Credentials</p>
          <button onClick={this.login} className="button primary">
            Iniciar Sesión
          </button>
        </div>
      </div>
    );
  }
}

export default SignIn;
