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
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
    return response;
  },
};

export default UserAuth;
