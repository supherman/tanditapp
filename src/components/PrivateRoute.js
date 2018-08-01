import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import FakeAuth from './FakeAuth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      FakeAuth.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/sign_in',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
