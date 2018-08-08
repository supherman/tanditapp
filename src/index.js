import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import AWSAppSyncClient from 'aws-appsync';
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';

import appSyncConfig from './appSyncConfig';
import App from './App';
import config from './config';
import UserAuth from './services/UserAuth';
import registerServiceWorker from './registerServiceWorker';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
});

const client = new AWSAppSyncClient({
  url: appSyncConfig.graphqlEndpoint,
  region: appSyncConfig.region,
  auth: {
    type: appSyncConfig.authenticationType,
    apiKey: appSyncConfig.apiKey,
    jwtToken: UserAuth.getToken(),
  },
});

const app = (
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
);
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
