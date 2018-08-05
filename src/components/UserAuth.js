import { Auth } from 'aws-amplify';

const UserAuth = {
  authenticate(email, password) {
    return new Promise((resolve, reject) => {
      Auth.signIn(email, password)
        .then(() => {
          resolve(true);
        })
        .catch(() => {
          reject(false);
        });
    });
  },

  signUp(email, password) {
    return new Promise((resolve, reject) => {
      Auth.signUp(email, password)
        .then(() => {
          resolve('Usuario Creado');
        })
        .catch(err => {
          reject(err.message);
        });
    });
  },

  logout() {
    return new Promise(resolve => {
      Auth.signOut().then(() => {
        resolve('signout');
      });
    });
  },

  confirmationSignUp(email, confirmationCode) {
    return new Promise((resolve, reject) => {
      Auth.confirmSignUp(email, confirmationCode)
        .then(() => {
          resolve(true);
        })
        .catch(err => {
          reject(err.message);
        });
    });
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
