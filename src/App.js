import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import './styles/main.css';

// Pages
import Landing from './pages/Landing';
import StyleGuide from './pages/StyleGuide';
import Dashboard from './pages/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <PrivateRoute exact path="/style_guide" component={StyleGuide} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <AdminRoute path="/admin" component={Dashboard} />
          <Route component={Landing} />
        </Switch>
      </Router>
    );
  }
}

export default App;
