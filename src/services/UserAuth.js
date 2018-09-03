import { Auth } from 'aws-amplify';

const UserAuth = {
  authenticate(email, password) {
    return Auth.signIn(email, password);
  },

  signUp(email, password) {
    return Auth.signUp(email, password);
  },

  logout() {
    return Auth.signOut();
  },

  confirmationSignUp(email, confirmationCode) {
    return Auth.confirmSignUp(email, confirmationCode);
  },

  resendConfirm(email) {
    return Auth.resendSignUp(email);
  },

  isAuthenticated: () => {
    const response = Auth.currentSession()
      .then(response => {
        const cognitoGroups = response.accessToken.payload['cognito:groups'];
        const isAdmin = cognitoGroups && cognitoGroups.includes('Admin');
        return { loggedIn: true, isAdmin: isAdmin };
      })
      .catch(() => {
        return { loggedIn: false, isAdmin: false };
      });
    return response;
  },

  getToken: async () =>
    (await Auth.currentSession()).getAccessToken().getJwtToken(),
};

export default UserAuth;
