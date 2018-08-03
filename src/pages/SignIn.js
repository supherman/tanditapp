import React from 'react';
import { Redirect } from 'react-router-dom';
import UserAuth from '../components/UserAuth';

class SignIn extends React.Component {
  state = {
    redirectToReferrer: false,
    invalidCredentials: false,
    email: '',
    password: '',
  };

  login = event => {
    console.log("login")
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
    const { from } = this.props.location.state || {
      from: { pathname: '/style_guide' },
    };
    const { redirectToReferrer } = this.state;
    const showMessage = this.state.invalidCredentials ? 'block' : 'none';

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className="container margin-auto">
        <form className="panel small-padding white-bg small-margin-top" onSubmit={this.login}>
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
          <p style={{ display: showMessage }}>Invalid Credentials</p>
          <button onClick={this.login} className="button primary" type="submit">
            Iniciar Sesión
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
