import { Auth } from 'aws-amplify';

const UserAuth = {
  authenticate(email, password) {
    return new Promise((resolve, reject) => {
      Auth.signIn(email, password)
        .then(() => { resolve(true) })
        .catch(err => { reject(false) });
    });
  },

  logout() {
    return new Promise(resolve => {
      Auth.signOut()
        .then(data => { resolve("signout") })
        .catch(err => console.log(err));
    });
  },

  isAuthenticated: async () => {
    const response = await Auth.currentSession()
      .then(() => { return true })
      .catch(() => { return false });

    return response;
  }
};

export default UserAuth;
