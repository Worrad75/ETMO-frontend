import React from "react";
import ResultsContainer from "./ResultsContainer"
import SearchForm from "../components/SearchForm"

export default class SearchContainer extends React.Component {
    
    state = {
        // The term that will be passed to the fetch in ResultsContainer
        currentWord: "example"
    }

    submitHandler = (e, searchTerm) => {
        console.log("submitted: ", searchTerm)
        e.preventDefault()
        this.setState({
            currentWord: searchTerm.toLowerCase()
        })
    }

    render() {
        console.log("re-rendering search cont")
        return (
            <div>
                "search container"
                <br />
                <ResultsContainer currentWord={this.state.currentWord}/>
                <SearchForm submitHandler={this.submitHandler} />
            </div>
        )
    }

}