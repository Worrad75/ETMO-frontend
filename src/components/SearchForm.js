import React from "react";
import { connect } from 'react-redux'
import "../search_form_animation.scss"
import "../peeling_text.css"

class SearchForm extends React.Component {

    state = {
        searchTerm: ""
    }

    submitHandler = (e, searchTerm) => {
        e.preventDefault()
        this.props.changeWord(searchTerm.toLowerCase())
        this.props.history.push(`/result`)
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <form className="word-search-form" onSubmit={(e) => this.submitHandler(e, this.state.searchTerm)}>
                        <input type="text" className="un" name="searchTerm" placeholder="spelling" onChange={this.onChange} />
                        <br />
                        <input id="word-search-submit" className="submit" type="submit" value="Submit" />
                    </form>
                </div>


                <h1 className="any_word" data-heading="any word">filler</h1>


                <p aria-label="CodePen">
                    <span data-text="S">S</span>
                    <span data-text="E">E</span>
                    <span data-text="A">A</span>
                    <span data-text="R">R</span>
                    <span data-text="C">C</span>
                    <span data-text="H">H</span>
                    {/* <span data-text="N">N</span> */}
                </p>
            </div>
        )
    }
}

function mdp(dispatch) {
    return {
        changeWord: (word) => { dispatch({ type: "CHANGE_WORD", payload: word }) }
    }
}

function msp(storedState) {
    return {
        currentUser: storedState.currentUser
    }
}

export default connect(msp, mdp)(SearchForm)




/* <div id="container">
                    understand
                    <div id="flip">
                        <div><div>Your</div></div>
                        <div><div>Words</div></div>
                        <div><div>Favorite</div></div>
                    </div>
                    better
                </div> */