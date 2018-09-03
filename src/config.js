export default {
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_APP_CLIENT_ID,
    AUTHENTICATION_TYPE: process.env.REACT_APP_AUTHENTICATION_TYPE,
  },
  appSync: {
    graphqlEndpoint: process.env.REACT_APP_ENDPOINT,
    region: process.env.REACT_APP_REGION,
    authenticationType: process.env.REACT_APP_AUTHENTICATION_TYPE,
    apiKey: process.env.REACT_APP_API_KEY,
  },
};
