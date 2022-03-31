import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

import Home from './pages';
import LegalesPage from './pages/mentions';

function App() {
  return (
    <Router >
      <Switch>

        <Route path="/" component={Home} exact />
        <Route path="/mentions-legales" component={LegalesPage} exact />

      </Switch>

    </Router>
  );
}

export default App;
