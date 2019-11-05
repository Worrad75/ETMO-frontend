import React from "react";
import ResultsContainer from "./ResultsContainer"
import SearchForm from "../components/SearchForm"
import { connect } from 'react-redux'

class SearchContainer extends React.Component {
    
    // state = {
    //     // The term that will be passed to the fetch in ResultsContainer
    //     currentWord: "example"
    // }

    render() {
        // console.log("re-rendering search cont")
        return (
            <div>
                "search container"
                <br />
                <ResultsContainer />
                <SearchForm />
            </div>
        )
    }

}

function msp(storedState) {
    return {
        currentWord: storedState.currentWord
    }
}

function mdp(dispatch) {
    return {
        changeWord: (word) => { dispatch({ type: "CHANGE_WORD", payload: word }) }
    }
}

export default connect(msp, mdp)(SearchContainer)