import React, { PureComponent } from 'react';
import UserAuth from '../services/UserAuth';
import Flash from '../shared_components/Flash';

export default class ResendConfirm extends PureComponent {
  state = {
    email: '',
    errors: '',
    success: '',
  };

  handleResendConfirm = event => {
    event.preventDefault();
    const { email } = this.state;
    UserAuth.resendConfirm(email)
      .then(() => {
        this.setState({
          success: 'Confirmation code sent, please check your email.',
          errors: '',
        });
      })
      .catch(errors => {
        this.setState({
          errors: errors.message || errors,
          success: '',
        });
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { errors, success } = this.state;
    const { onChangePanel } = this.props;
    return (
      <div className="auth-panel">
        <form className="panel small-padding white-bg">
          <h2 className="small-margin-bottom">Solicitar confirmación</h2>
          <label>Email:</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            type="text"
          />
          <div className="text-center">
            {success && <Flash type="success">{success}</Flash>}
            {errors && <Flash type="error">{errors}</Flash>}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="button primary"
              onClick={this.handleResendConfirm}
            >
              Reenviar Código
            </button>
          </div>
          <p className="text-center small-margin-top">
            ¿Ya estás registrado?{' '}
            <a
              className="green-text-color"
              onClick={onChangePanel}
              name="signin"
            >
              Inicia sesión aquí.
            </a>
          </p>
          <p className="text-center small-margin-top">
            ¿Necesitas una cuenta?{' '}
            <a
              className="green-text-color"
              onClick={onChangePanel}
              name="signup"
            >
              Regístrate aquí.
            </a>
          </p>
        </form>
      </div>
    );
  }
}
