import React, { PureComponent, Fragment } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ResendConfirm from './ResendConfirm';

class AuthPanels extends PureComponent {
  state = {
    panelShowing: 'signin',
  };

  generatePanels = panelShowing => {
    switch (panelShowing) {
      case 'signin':
        return <SignIn onChangePanel={this.handleChangePanel} />;
      case 'signup':
        return <SignUp onChangePanel={this.handleChangePanel} />;
      case 'resend':
        return <ResendConfirm onChangePanel={this.handleChangePanel} />;
      default:
        break;
    }
  };

  handleChangePanel = event => {
    this.setState({
      panelShowing: event.target.name,
    });
  };

  render() {
    const { panelShowing } = this.state;
    return <Fragment>{this.generatePanels(panelShowing)}</Fragment>;
  }
}

export default AuthPanels;
