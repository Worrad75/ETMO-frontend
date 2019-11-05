import React from 'react';
import './App.css';
import LandingPage from "./containers/LandingPage"
import { Switch, Route } from "react-router-dom";
import PersonalContainer from './containers/PersonalContainer';
import SearchContainer from './containers/SearchContainer';

function App(){
  return (
    <div className="App">

      <Switch>
        <Route path="/home" component={LandingPage} />

        <Route path="/profile" component={PersonalContainer} />
        <Route path="/search" component={SearchContainer} />
        
      {/* <Route path="/home" component={LandingPage} /> */}
      </Switch>
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
