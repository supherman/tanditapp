import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import './styles/main.css';

// Pages
import Landing from './pages/Landing';
import StyleGuide from './pages/StyleGuide';
import Dashboard from './pages/Dashboard';
import CreateTandita from './pages/Admin/Tanditas/Create';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <PrivateRoute exact path="/style_guide" component={StyleGuide} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <AdminRoute exact path="/admin" component={Dashboard} />
          <AdminRoute
            exact
            path="/admin/tanditas/create"
            component={CreateTandita}
          />
          <Route component={Landing} />
        </Switch>
      </Router>
    );
  }
}

export default App;
