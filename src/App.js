import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import './styles/main.css';

// Pages
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import StyleGuide from './pages/StyleGuide';
import Dashboard from './pages/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <PrivateRoute exact path="/tandas" component={Dashboard} />
          <PrivateRoute exact path="/style_guide" component={StyleGuide} />
          <PrivateRoute exact path="/something" component={StyleGuide} />
          <Route exact path="/sign_in" component={SignIn} />
          <Route exact path="/sign_up" component={SignUp} />
          <Route component={StyleGuide} />
        </Switch>
      </Router>
    );
  }
}

export default App;
