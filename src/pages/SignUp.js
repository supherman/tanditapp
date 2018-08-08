import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm';
import ConfirmationCodeForm from '../components/ConfirmationCodeForm';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    userCreated: false,
    userLogged: false,
  };

  handleUserCreated = (email, password) => {
    this.setState({
      userCreated: true,
      email: email,
      password: password,
    });
  };

  render() {
    const newUserProps = {
      email: this.state.email,
      password: this.state.password,
    };
    return (
      <div className="container margin-auto">
        {this.state.userCreated ? (
          <ConfirmationCodeForm {...newUserProps} />
        ) : (
          <SignUpForm onUserCreated={this.handleUserCreated} />
        )}
      </div>
    );
  }
}

export default SignUp;
