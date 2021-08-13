import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import CharactorsComponent from './pages/CharactorsComponent/CharactorsComponent.js';
import './App.css';
import InfoPage from './pages/InfoPage/InfoPage.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={CharactorsComponent} />
          <Route exact path="/InfoPage/:id" component={InfoPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
