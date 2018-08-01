const FakeAuth = {
  authenticate(email) {
    return new Promise((resolve, reject) => {
      if (email === 'fernando@michelada.io') {
        localStorage.setItem('token', 'aldfj3orwejw');
        resolve(true);
      } else {
        reject(false);
      }
    });
  },

  logout() {
    return new Promise(resolve => {
      localStorage.removeItem('token');
      resolve('logged out');
    });
  },

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  },
};

export default FakeAuth;
