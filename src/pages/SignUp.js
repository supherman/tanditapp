import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import UserAuth from '../components/UserAuth';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    confirmationCode: '',
    userCreated: false,
    newUserError: false,
    newUserErrorMsg: '',
    userLogged: false,
    passwordDontMatch: false,
  };

  validateForm = () => {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      !this.state.passwordDontMatch
    );
  };

  validateConfirmationCode = () => {
    return this.state.confirmationCode.length > 0;
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    UserAuth.signUp(this.state.email, this.state.password)
      .then(() => {
        this.setState({
          userCreated: true,
          newUserError: false,
        });
      })
      .catch(err => {
        this.setState({
          newUser: null,
          newUserError: true,
          newUserErrorMsg: err,
        });
      });
  };

  handleConfirmationSubmit = event => {
    event.preventDefault();
    UserAuth.confirmationSignUp(this.state.email, this.state.confirmationCode)
      .then(() => {
        this.loginNewUser();
      })
      .catch(err => {
        this.setState({
          userLogged: false,
          newUser: null,
          newUserError: true,
          newUserErrorMsg: err,
        });
      });
  };

  loginNewUser = () => {
    UserAuth.authenticate(this.state.email, this.state.password)
      .then(() => {
        this.setState({ userLogged: true });
      })
      .catch(() => {
        this.setState({ userLogged: false });
      });
  };

  verifyPasswordConfirmation = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    this.setState(prevState => ({
      passwordDontMatch: prevState.password !== prevState.confirmPassword,
    }));
  };

  renderConfirmationForm() {
    return (
      <form
        className="panel small-padding white-bg small-margin-top"
        onSubmit={this.handleConfirmationSubmit}
      >
        <input
          name="confirmationCode"
          type="text"
          value={this.state.confirmationCode}
          onChange={this.handleChange}
        />
        <p>Revisa tu correo para obtener tu código de confirmación</p>
        {this.state.newUserError && <p>{this.state.newUserErrorMsg}</p>}
        <button
          disabled={!this.validateConfirmationCode()}
          className="button primary"
          type="submit"
        >
          Verificar código
        </button>
      </form>
    );
  }

  renderForm() {
    return (
      <form
        className="panel small-padding white-bg small-margin-top"
        onSubmit={this.handleSubmit}
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
          onChange={this.verifyPasswordConfirmation}
          type="password"
        />
        <label>Confirma tu Password:</label>
        <input
          name="confirmPassword"
          value={this.state.confirmPassword}
          onChange={this.verifyPasswordConfirmation}
          type="password"
        />
        {this.state.passwordDontMatch && (
          <p>Confirmación de password no concuerda</p>
        )}
        {this.state.newUserError && <p>{this.state.newUserErrorMsg}</p>}
        <button
          disabled={!this.validateForm()}
          className="button primary"
          type="submit"
        >
          Crear cuenta
        </button>
      </form>
    );
  }

  render() {
    const { userLogged } = this.state;

    if (userLogged) {
      return <Redirect to="/style_guide" />;
    }
    return (
      <div className="container margin-auto">
        {this.state.userCreated
          ? this.renderConfirmationForm()
          : this.renderForm()}
      </div>
    );
  }
}

export default SignUp;
