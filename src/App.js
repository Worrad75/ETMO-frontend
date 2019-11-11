import React from 'react';
import "./App.css";
import LandingPage from "./containers/LandingPage"
import { Switch, Route, withRouter } from "react-router-dom";
import PersonalContainer from './containers/PersonalContainer';
import SearchForm from './components/SearchForm';
// import Result from './components/Result';
import ResultsContainer from './containers/ResultsContainer';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount(){
    let user_id = localStorage.user_id
    if (user_id) {
      fetch("http://localhost:3000/auto_login", {
        headers: {
          Authorization: user_id
        }
      })
      .then(resp => resp.json())
      .then(response => {
        if (response !== undefined && !response.errors) {
          console.log("auto login successful! Welcome back.")
            this.setUser(response)
          } else if (response !== undefined && response.errors) {
            alert(response.errors)
          }
        })
    } else {
      console.log("auto login unsuccessful")
    }
  }

  setUser = (user) => {
    this.props.loginUser(user)
    this.redirect_to("home")
  }

  logout = () => {
    this.props.logoutUser()
    this.redirect_to("home")
  }

  redirect_to(route){
    console.log("redirected to: ", route)
    this.props.history.push(`/${route}`)
  }

  render(){
    return (
      <div className="App">
        <img id="logo" alt="ETMO-logo"></img>
        <Switch>
          <Route path="/home" component={LandingPage} />
          <Route path="/profile" component={PersonalContainer} />
          <Route path="/result" component={ResultsContainer} />
          <Route path="/search" component={SearchForm} />
          {/* <Route path="/result" component={Result}/> */}
        </Switch>
      </div>
    );
  }
}


function msp(storedState) {
  return {}
}

function mdp(dispatch){
  return {
    logoutUser: () => { dispatch({ type: "LOGOUT" }) },
    loginUser: (user) => { dispatch({ type: "LOGIN", payload: user }) }
  }
}

export default withRouter(connect(msp, mdp)(App))