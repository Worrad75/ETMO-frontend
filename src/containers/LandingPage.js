import React from "react";
import MainContainer from "./MainContainer"
import Login from "../components/Login";
import Signup from "../components/Signup";
// import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';


export default class LandingPage extends React.Component {

    state = {
        currentUser: null
    }

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
            .then(response => console.log(response))
            // .then(response => {
            //     if (response.errors) {
            //         alert(response.errors)
            //     } else {
            //         this.setUser(response)
            //     }
            // })

        } else {
            console.log("auto login unsuccessful")
        }
        
    }

    setUser =(user)=> {
        this.setState({
            currentUser: user
        }, () => {
            localStorage.user_id = user.id
            this.redirect_to("newPageRoute")
        })
    }

    logout =()=> {
        this.setState({
            currentUser: null
        }, () => {
            localStorage.clear()
            this.redirect_to("newPageRoute")
        })
    }

    redirect_to =(route)=> {
        console.log("this func will eventually redirect to: ", route)
        // this.props.history.push(`/${route}`)
    }

    render() {
        return( 
            <div>
                -- ETMO --
                <br/>
                {/* <MainContainer /> */}

                <Login setUser={this.setUser} />
                <Signup setUser={this.setUser} />
            </div>
        )
    }

}