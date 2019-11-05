import React from "react";
import Result from "../components/Result"
import { connect } from 'react-redux'

class ResultsContainer extends React.Component {

    state = {
        // The full hash that is collected from the API call
        wordOBJ: {}
    }

    componentDidMount() {
        this.getWordInfo()
    }

    componentDidUpdate(prevProps){
        if (prevProps.currentWord !== this.props.currentWord) {
            this.getWordInfo()
        }
    }

    getWordInfo = () => {
        // https://cors-anywhere.herokuapp.com/ ------>>> allows us to mimmick a backend request to the API from our frontend
        // https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${this.props.currentWord} ------>>> our API payload path
        if (this.props.currentWord !=="") {
            console.log("CURRENT WORD BEFORE FETCH: ", this.props.currentWord)
            fetch(`https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${this.props.currentWord}`, {
                method: "GET",
                headers: {
                    "app_key": "c2340027dab4d00e48ec8dc3e435d6ab",
                    "app_id": "d654645f",
                    "Content-Type": "application/json",
                    "Accept": "application/json"
            }})
            .then(resp => resp.json())
            .then(data => this.setState({
                wordOBJ: data
            }))
        }
    }

    render() {
        return (
            <div>
                "results container"
                <br />
                {this.state.wordOBJ.id ? <Result key={this.state.wordOBJ.word} wordOBJ={this.state.wordOBJ.results[0].lexicalEntries[0]} /> : ""}
            </div>
        )
    }

}

function msp(storedState) {
    return {
        currentWord: storedState.currentWord
    }
}

export default connect(msp, {})(ResultsContainer)