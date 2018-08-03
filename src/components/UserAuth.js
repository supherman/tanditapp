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

  logout() {
    return new Promise(resolve => {
      Auth.signOut().then(() => {
        resolve('signout');
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
