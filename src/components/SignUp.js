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
    this.setState(prevState => ({
      userCreated: !prevState.userCreated,
    }));
  };

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
            onShowHideConfirmation={this.handleShowHideConfirmation}
          />
        ) : (
          <SignUpForm
            onUserCreated={this.handleUserCreated}
            onChangePanel={this.props.onChangePanel}
            onShowHideConfirmation={this.handleShowHideConfirmation}
          />
        )}
      </Fragment>
    );
  }
}

export default SignUp;
