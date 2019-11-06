import React from "react";
import ResultsContainer from "./ResultsContainer"
import SearchForm from "../components/SearchForm"

export default class SearchContainer extends React.Component {

    render() {
        return (
            <div>
                <SearchForm/>
                <ResultsContainer/>
            </div>
        )
    }

}