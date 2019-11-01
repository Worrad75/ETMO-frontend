import React from "react";

export default class Signup extends React.Component {

    state = {
        username: "",
        password: "",
        passwordConfirmation: ""
    }

    handleChange =(e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit =(e)=> {
        e.preventDefault()
        if (this.state.password === this.state.passwordConfirmation) {
            fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({username: this.state.username, password: this.state.password})
            })
            .then(resp => resp.json())
            .then(response => {
                console.log(response)
                if (response.errors) {
                    alert(response.errors)
                } else {
                    this.props.setUser(response)
                }
            })
        } else {
            alert("Passwords don't match!")
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter Username" />
                    <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password" />
                    <input name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} placeholder="Confirm Password" />

                    <button className="signup" type="submit" >Signup</button>
                </form>
            </div>
        )
    }

}