import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserAuth from '../services/UserAuth';

export default class PrivateRoute extends Component {
  state = {
    fetching: true,
    isLoggedIn: false,
  };

  componentDidMount = async () => {
    const response = await UserAuth.isAuthenticated();
    this.setState({
      isLoggedIn: response,
      fetching: false,
    });
  };

  render() {
    const { component: Component, ...rest } = this.props;
    const { isLoggedIn, fetching } = this.state;
    return !fetching ? (
      <Route
        {...rest}
        render={props =>
          isLoggedIn ? (
            <Component {...props} isLoggedIn={isLoggedIn} />
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location },
              }}
            />
          )
        }
      />
    ) : (
      <div />
    );
  }
}
