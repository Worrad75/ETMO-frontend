import React from 'react';
import './App.css';
import LandingPage from "./containers/LandingPage"
import { Switch, Route } from "react-router-dom";
import PersonalContainer from './containers/PersonalContainer';
import SearchForm from './components/SearchForm';
import ResultsContainer from './containers/ResultsContainer';

function App(){
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={LandingPage} />
        <Route path="/profile" component={PersonalContainer} />
        <Route path="/result" component={ResultsContainer} />
        <Route path="/search" component={SearchForm} />
      </Switch>
    </div>
  );
}

export default App;
