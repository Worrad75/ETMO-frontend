import React from "react";
// import MainContainer from "./MainContainer"
import Login from "../components/Login";
import Signup from "../components/Signup";
import { connect } from "react-redux"
import "../hover_me.css"

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

    scrollDown = () => {
        window.scroll({
            top: 810,
            behavior: 'smooth'
        })
    }

    render() { 
        let loggedOut = {}
            if (this.state.toggleLoginSignup) {
                loggedOut = <div className="ETMO-blue">
                <Login setUser={this.setUser} /><br/>
                    <p className="forgot" onClick={this.switchHandler}>{this.state.toggleLoginSignup ? "I want an account" : "I already have an account"}</p>
                    <br />
                    </div>
            } else {
                loggedOut = <div className="ETMO-blue">
                <Signup setUser={this.setUser} /><br />
                <p className="forgot" onClick={this.switchHandler}>{this.state.toggleLoginSignup ? "I want an account" : "I already have an account"}</p>
                <br />
                </div>
            }

        let loggedIn = 
            <div className="ETMO-blue">
                <button className="submit" id="to-left" onClick={() => this.props.history.push("profile")}>PROFILE</button>
                <button className="submit" id="to-right" onClick={() => this.props.history.push("search")}>SEARCH</button><br />
                <button className="submit" onClick={this.logout}> LOGOUT </button>
                <br /><br /><br /><br />
            </div>
        
        return(
            <>
                <div className="parallax" >

                    <div onClick={() => this.scrollDown()} id="circle-container">
                        <div id="cc">
                            <div className="circle" id="five"></div>
                            <div className="circle" id="four"></div>
                            <div className="circle" id="three"></div>
                            <div className="circle" id="two"></div>
                            <div className="circle" id="one"></div>
                        </div>
                    </div>
                    {/* <a id="explore" onClick={()=> this.scrollDown()}>EXPLORE</a> */}
                </div>
                <div className="middle-stripe-landing-page">
                    <br /><br /><br /><br />
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