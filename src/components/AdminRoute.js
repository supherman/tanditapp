import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserAuth from '../services/UserAuth';

export default class AdminRoute extends Component {
  state = {
    fetching: true,
    isLoggedIn: false,
    isAdmin: false,
  };

  componentDidMount = async () => {
    const response = await UserAuth.isAuthenticated();
    this.setState({
      isLoggedIn: response.loggedIn,
      isAdmin: response.isAdmin,
      fetching: false,
    });
  };

  render() {
    const { component: Component, ...rest } = this.props;
    const { isLoggedIn, isAdmin, fetching } = this.state;
    return (
      !fetching && (
        <Route
          {...rest}
          render={props =>
            isLoggedIn && isAdmin ? (
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
      )
    );
  }
}
