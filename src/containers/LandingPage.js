import React from "react";
import MainContainer from "./MainContainer"
import Login from "../components/Login";
import Signup from "../components/Signup";
import { connect } from "react-redux"

class LandingPage extends React.Component {

    setUser = (user) => {
        this.props.loginUser(user)
        this.redirect_to("profile")
    }

    logout = () => {
        this.props.logoutUser()
        this.redirect_to("home")
    }


    render() {
        let loggedOut = 
            <><Login setUser={this.setUser} />
            <Signup setUser={this.setUser} /></>

        let loggedIn = 
            <>
                <button onClick={() => this.props.history.push("profile")}>GO TO PROFILE</button>
                <br/>
                <button onClick={this.logout}> Logout </button>
            </>
        return( 
            <div>
                -- ETMO --
                <br/>
                
                {localStorage.user_id ? loggedIn : loggedOut}
            </div>
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