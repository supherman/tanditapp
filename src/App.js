import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './styles/main.css';

// Pages
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import StyleGuide from './pages/StyleGuide';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/style_guide" component={StyleGuide} />
          <Route exact path="/sign_in" component={SignIn} />
          <Route component={StyleGuide}/>
        </Switch>
      </Router>      
    );
  }
}

export default App;
