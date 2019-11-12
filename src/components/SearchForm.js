import React from "react";
import { connect } from 'react-redux'
import "../search_form_animation.scss"

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
                        <input type="text" className="un" name="searchTerm" placeholder="spelling of word" onChange={this.onChange} />
                        <br />
                        <input id="word-search-submit" className="submit" type="submit" value="Submit" />
                    </form>
                </div>


                <h1 data-heading="search any word">filler</h1>

                {/* <div id="container">
                    MAKE
                    <div id="flip">
                        <div><div>Your</div></div>
                        <div><div>Words</div></div>
                        <div><div>Favorite</div></div>
                    </div>
                    SURE!
                </div> */}
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



    // <div id="container">
    //     Make
    //     <div id ="flip">
    //         <div><div>Darrow</div></div>
    //         <div><div>Flatiron</div></div>
    //         <div><div>beef</div></div>
    //     </div>
    //     AweSoMe!
    // </div >
    // <p>a css3 animation demo</p>