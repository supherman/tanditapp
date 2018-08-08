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

  isAuthenticated: () => {
    const response = Auth.currentSession()
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
    return response;
  },

  getToken: async () =>
    (await Auth.currentSession()).getAccessToken().getJwtToken(),
};

export default UserAuth;
