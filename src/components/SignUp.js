import React, { Component, Fragment } from 'react';
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

  handleShowHideConfirmation = () => {
    this.setState({
      userCreated: !this.state.userCreated,
    });
  }

  handleShowConfirmation = () => {
    this.setState({
      userCreated: true,
    });
  }

  render() {
    const newUserProps = {
      email: this.state.email,
      password: this.state.password,
    };
    return (
      <Fragment>
        {this.state.userCreated ? (
          <ConfirmationCodeForm 
            {...newUserProps} 
            handleShowHideConfirmation={this.handleShowHideConfirmation}
          />
        ) : (
          <SignUpForm 
            onUserCreated={this.handleUserCreated} 
            handleChangePanel={this.props.handleChangePanel} 
            handleShowHideConfirmation={this.handleShowHideConfirmation}
          />
        )}
      </Fragment>
    );
  }
}

export default SignUp;
