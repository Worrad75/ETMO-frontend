import React from "react";
import Result from "../components/Result"
import { connect } from 'react-redux'
// import spinner from '../assets/spinner.gif'
import "../results.css"

class ResultsContainer extends React.Component {

    state = {
        wordOBJ: {}, // The full hash that is collected from the API call
        lang: "en-us"
    }

    componentDidMount() {
        this.getWordInfo()
    }

    componentDidUpdate(prevProps){
        if (prevProps.currentWord !== this.props.currentWord) {
            this.getWordInfo()
        }
    }

    handleErrors = (response) => {
        if (!response.ok) {
            // throw Error(response.statusText);
            alert("Something went wrong. You will now be redirected to the search page.")
            this.props.history.push("search")
        }
        return response;
    }

    getWordInfo = () => {
        if (this.props.currentWord !== "") {
            console.log("CURRENT LANG BEFORE FETCH: ", this.props.currentLang)
            console.log("CURRENT WORD BEFORE FETCH: ", this.props.currentWord)
            // https://cors-anywhere.herokuapp.com/ ------>>> allows us to mimmick a backend request to the API from our frontend
            // https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${this.props.currentWord} ------>>> our API payload path
            fetch(`https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v2/entries/${this.props.currentLang}/${this.props.currentWord}`, {
                method: "GET",
                headers: {
                    "app_key": "157a656011578bfc28980ab27d1c2aa7",
                    "app_id": "15353535",
                    "Content-Type": "application/json",
                    "Accept": "application/json"
            }})
            .then(this.handleErrors)
            .then(resp => resp.json())
            .then(data => 
                this.setState({
                wordOBJ: data
            }))
            .catch(error => console.log(error));
        }
    }

    render() {
        return (
            <div>
                <br />
                {this.state.wordOBJ.id ? <Result history={this.props.history} key={this.state.wordOBJ.word} wordOBJ={this.state.wordOBJ.results[0].lexicalEntries[0]} />
                : <img id="search-spinner" src={require('../assets/new_spinner.gif')} alt="loading..." />}
            </div>
        )
    }

}

function msp(storedState) {
    return {
        currentWord: storedState.currentWord,
        currentLang: storedState.currentLang
    }
}

export default connect(msp, {})(ResultsContainer)