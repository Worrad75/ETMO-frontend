import React from "react";
import MainContainer from "./MainContainer"
import Login from "../components/Login";
import Signup from "../components/Signup";
import { connect } from "react-redux"

class LandingPage extends React.Component {

    componentDidMount() {
        let user_id = localStorage.user_id
        if (user_id) {
            console.log("auto login successful! Welcome back.")
            fetch("http://localhost:3000/auto_login", {
                headers: {
                    Authorization: user_id
                }
            })
            .then(resp => resp.json())
            .then(response => {
                console.log(response)
                if (response !== undefined && !!response.errors) {
                    this.setUser(response)
                } else if (response !== undefined && response.errors){
                    alert(response.errors)
                }
            })
        } else {
            console.log("auto login unsuccessful")
        }
    }

    setUser =(user)=> {
        this.props.loginUser(user)
        this.redirect_to("profile")
    }

    logout =()=> {
        this.props.logoutUser()
        this.redirect_to("home")
    }

    redirect_to =(route)=> {
        console.log(" current user: ", this.props.currentUser)
        console.log("redirected to: ", route)
        this.props.history.push(`/${route}`)
    }

    render() {
        // console.log("current user:", this.props.currentUser)

        let loggedOut = 
            <><Login setUser={this.setUser} />
            <Signup setUser={this.setUser} /></>

        let loggedIn = 
            <><button onClick={() => this.props.history.push("profile")}>GO TO PROFILE</button>
            <br/>
            <button onClick={this.logout}> Logout </button></>
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

function mdp(dispatch){
    return {
        logoutUser: () => { dispatch({type: "LOGOUT"}) },
        loginUser: (user) => { dispatch({type: "LOGIN", payload: user}) }
    }
}

export default connect(msp, mdp)(LandingPage)