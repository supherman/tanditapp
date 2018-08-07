import React, { Component } from 'react';
import UserAuth from '../services/UserAuth';

class RenderSignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      newUserError: false,
      newUserErrorMsg: '',
      passwordDontMatch: false,
    };
  }

  validateForm = () => {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      !this.state.passwordDontMatch
    );
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
        this.setState({ newUserError: false });
        this.props.onUserCreated(this.state.email, this.state.password);
      })
      .catch(err => {
        this.setState({
          newUser: null,
          newUserError: true,
          newUserErrorMsg: err.message,
        });
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

  render() {
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
}

export default RenderSignUpForm;
