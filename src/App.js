import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Navigation from './Navigation';



const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
