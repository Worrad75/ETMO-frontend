import React from "react";

export default class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleChange =(e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit =(e)=> {
        e.preventDefault()
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.errors) {
                alert(response.errors)
            } else {
                this.props.setUser(response)
            }
        })
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input className="un" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter Username" type="text" />
                    <input className="pass" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password" type="password" /><br /><br />
                    <button className="submit" type="submit" >Log In</button>
                </form>
            </div>
        )
    }

}