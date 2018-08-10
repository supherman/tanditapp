import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import UserAuth from '../services/UserAuth';
import Flash from '../shared_components/Flash';

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
    UserAuth.confirmationSignUp(
      this.props.email || this.state.email,
      this.state.confirmationCode,
    )
      .then(() => {
        this.props.password !== ''
          ? this.loginNewUser()
          : this.props.onShowHideConfirmation();
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
    const { email } = this.props;

    if (userLogged) {
      return <Redirect to="/style_guide" />;
    }

    return (
      <form
        className="panel small-padding white-bg small-margin-top code-confirm"
        onSubmit={this.handleConfirmationSubmit}
      >
        <h2 className="small-margin-bottom">Confirma tu código</h2>
        {!email && (
          <Fragment>
            <label>Correo a confirmar:</label>
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label>Código de confirmación:</label>
          </Fragment>
        )}
        <input
          name="confirmationCode"
          type="text"
          value={this.state.confirmationCode}
          onChange={this.handleChange}
        />
        {this.state.newUserError && <Flash type="error">{this.state.newUserErrorMsg}</Flash>}
        <div className="text-center">
          <p>Revisa tu correo para obtener tu código de confirmación</p>
          <button
            disabled={!this.validateConfirmationCode()}
            className="button primary"
            type="submit"
          >
            Verificar código
          </button>
        </div>
        <p className="text-center small-margin-top">
          ¿No tienes una cuenta?
          <a
            className="green-text-color"
            onClick={this.props.onShowHideConfirmation}
            name="signin"
          >
            {' '}
            Crea una cuenta aquí.
          </a>
        </p>
      </form>
    );
  }
}

export default ConfirmationCodeForm;
