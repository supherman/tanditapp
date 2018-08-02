import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserAuth from './UserAuth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        UserAuth.isAuthenticated() ? (
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
}

export default PrivateRoute;
