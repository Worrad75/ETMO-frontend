import React from "react";
import { connect } from 'react-redux'
import "../search_form_animation.scss"
import "../peeling_text.css"
import "../results.css"

class SearchForm extends React.Component {

    state = {
        searchTerm: ""
    }

    componentDidMount() {
        window.scroll({ top: 0, behavior: 'auto' })
    }

    submitHandler = (e, searchTerm) => {
        e.preventDefault()
        this.props.changeWord(searchTerm.toLowerCase())
        this.props.history.push(`/result`)
    }

    langChange = (e) => {
        e.preventDefault()
        this.props.changeLanguage(e.target.value)
        this.props.history.push(`/search`)
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

                <div className="box">
                    <select onChange={this.langChange}>
                        <option value="en-us" >American English</option>
                        <option value="es" >Spanish</option>
                        <option value="en" >German (coming soon)</option>
                    </select>
                </div>

                {/* <h1 className="any_word" data-heading="any word">filler</h1> */}

                <div className="codepen">
                    <p aria-label="CodePen">
                        <span data-text="S">S</span>
                        <span data-text="E">E</span>
                        <span data-text="A">A</span>
                        <span data-text="R">R</span>
                        <span data-text="C">C</span>
                        <span data-text="H">H</span>
                    </p>
                    <p aria-label="CodePen">
                        <span data-text="A">A</span>
                        <span data-text="N">N</span>
                        <span data-text="Y">Y</span>
                        <span data-text=" "> </span>
                        <span data-text=" "> </span>
                        <span data-text=" "> </span>
                        <span data-text="W">W</span>
                        <span data-text="O">O</span>
                        <span data-text="R">R</span>
                        <span data-text="D">D</span>
                    </p>
                </div>
            </div>
        )
    }
}

function mdp(dispatch) {
    return {
        changeWord: (word) => { dispatch({ type: "CHANGE_WORD", payload: word }) },
        changeLanguage: (code) => { dispatch({ type: "CHANGE_LANG", payload: code }) }
    }
}

function msp(storedState) {
    return {
        currentUser: storedState.currentUser
    }
}

export default connect(msp, mdp)(SearchForm)