import React from "react";
import MainContainer from "./MainContainer"
import Login from "../components/Login";
import Signup from "../components/Signup";
import { connect } from "react-redux"

class LandingPage extends React.Component {

    state = {
        toggleLoginSignup: true
    }

    setUser = (user) => {
        this.props.loginUser(user)
        this.props.history.push("profile")
    }

    logout = () => {
        this.props.logoutUser()
        this.props.history.push("home")
    }

    switchHandler = () => {
        this.setState({
            toggleLoginSignup: !this.state.toggleLoginSignup
        })
    }

    render() { 
        let loggedOut = {}
            if (this.state.toggleLoginSignup) {
                loggedOut = <>
                <Login setUser={this.setUser} /><br/>
                    <p className="forgot" onClick={this.switchHandler}>{this.state.toggleLoginSignup ? "I want an account" : "I already have an account"}</p></>
            } else {
                loggedOut = <>
                <Signup setUser={this.setUser} /><br />
                <p className="forgot" onClick={this.switchHandler}>{this.state.toggleLoginSignup ? "I want an account" : "I already have an account"}</p></>
            }

        let loggedIn = 
            <><button onClick={() => this.props.history.push("profile")}>GO TO PROFILE</button><br/>
                <button onClick={() => this.props.history.push("search")}>GO TO SEARCH</button><br />
                <button onClick={this.logout}> Logout </button></>
        return( 
            <>
                <div className="parallax" >
                </div>
                <div className="middle-stripe-landing-page">
                    <br />
                    <br /><br /><br /><br /><br />
                Words are powerful. Find yours.
                </div>
                    {localStorage.user_id ? loggedIn : loggedOut}
                <div className="parallax"></div>
            </>
        )
    }

}

function msp(storedState){
    return {
        currentUser: storedState.currentUser
    }
}

function mdp(dispatch) {
    return {
        logoutUser: () => { dispatch({ type: "LOGOUT" }) },
        loginUser: (user) => { dispatch({ type: "LOGIN", payload: user }) }
    }
}

export default connect(msp, mdp)(LandingPage)