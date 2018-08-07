import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import UserAuth from '../services/UserAuth';

class ConfirmationCodeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      confirmationCode: '',
      newUserError: false,
      newUserErrorMsg: '',
      userLogged: false,
    };
  }

  validateConfirmationCode = () => {
    return this.state.confirmationCode.length > 0;
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleConfirmationSubmit = event => {
    event.preventDefault();
    UserAuth.confirmationSignUp(this.props.email, this.state.confirmationCode)
      .then(() => {
        this.loginNewUser();
      })
      .catch(err => {
        this.setState({
          userLogged: false,
          newUser: null,
          newUserError: true,
          newUserErrorMsg: err.message,
        });
      });
  };

  loginNewUser = () => {
    UserAuth.authenticate(this.props.email, this.props.password)
      .then(() => {
        this.setState({ userLogged: true });
      })
      .catch(err => {
        this.setState({
          userLogged: false,
          newUserError: true,
          newUserErrorMsg: err.message,
        });
      });
  };

  render() {
    const { userLogged } = this.state;

    if (userLogged) {
      return <Redirect to="/style_guide" />;
    }

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
}

export default ConfirmationCodeForm;
