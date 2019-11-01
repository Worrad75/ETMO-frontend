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

    responseGoogle =(response)=> {
        console.log(response);
    }

    setUser =(user)=> {
        this.setState({
            currentUser: user
        }, () => { this.redirect_to("newPageRoute") })
    }

    logout =()=> {
        this.setState({
            currentUser: null
        }, () => { this.redirect_to("newPageRoute") })
    }

    redirect_to =(route)=> {
        console.log("this func will eventually redirect to: ", route)
        this.props.history.push(`/${route}`)
    }

    render() {
        return( 
            <div>
                -- ETMO --
                <br/>
                {/* <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />


                <FacebookLogin
                    appId="2755443464468150"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook} />  */}


                {/* <MainContainer /> */}

                <Login setUser={this.setUser} />
                <Signup setUser={this.setUser} />
            </div>
        )
    }

}