import React from "react";
import Result from "../components/Result"
import { connect } from 'react-redux'

class ResultsContainer extends React.Component {

    state = {
        wordOBJ: {} // The full hash that is collected from the API call
    }

    componentDidMount() {
        console.log("props", this.props)
        this.getWordInfo()
    }

    componentDidUpdate(prevProps){
        if (prevProps.currentWord !== this.props.currentWord) {
            this.getWordInfo()
        }
    }
    getWordInfo = () => {
        if (this.props.currentWord !== "") {
            console.log("CURRENT WORD BEFORE FETCH: ", this.props.currentWord)
            // https://cors-anywhere.herokuapp.com/ ------>>> allows us to mimmick a backend request to the API from our frontend
            // https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${this.props.currentWord} ------>>> our API payload path
            fetch(`https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${this.props.currentWord}`, {
                method: "GET",
                headers: {
                    "app_key": "de1bbe7446ae29aaaa81cc33a682a9bf",
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
        console.log(this.state.wordOBJ)
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