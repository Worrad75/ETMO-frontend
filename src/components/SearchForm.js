import React from "react";
import { connect } from 'react-redux'

class SearchForm extends React.Component {

    state = {
        searchTerm: ""
    }

    submitHandler = (e, searchTerm) => {
        e.preventDefault()
        console.log("submitted: ", searchTerm)
        this.props.changeWord(searchTerm.toLowerCase())
    }

    onChange = e => {
        // console.log("changing: ", this.state.searchTerm)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        // console.log("re-rendering search form")
        return (
            <div>
                <h3>SEARCH FORM</h3>
                <div>
                    <form className="word-search-form" onSubmit={(e) => this.submitHandler(e, this.state.searchTerm)}>
                        <input type="text" name="searchTerm" placeholder="spelling of word" onChange={this.onChange} />
                        <br />
                        <input id="word-search-submit" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

function mdp(dispatch) {
    return {
        changeWord: (word) => { dispatch({ type: "CHANGE_WORD", payload: word }) }
    }
}

export default connect(null, mdp)(SearchForm)