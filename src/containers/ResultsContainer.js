import React from "react";
import Result from "../components/Result"

export default class ResultsContainer extends React.Component {

    state = {
        // The full hash that is collected from the API call
        wordOBJ: {}
    }

    componentDidMount() {
        this.getWordInfo()
    }
    getWordInfo =()=> {
        // https://cors-anywhere.herokuapp.com/ ------>>> allows us to mimmick a backend request to the API from our frontend
        // https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${this.props.currentWord} ------>>> our API payload path

        fetch(`https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${this.props.currentWord}`, {
            method: "GET",
            headers: {
                "app_key": "c2340027dab4d00e48ec8dc3e435d6ab",
                "app_id": "d654645f",
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => this.setState({
            wordOBJ: data
        }))
    }

    render() {
        console.log("rendering: ", this.state.wordOBJ)
        return (
            <div>
                "results container"
                <br />
                <Result wordOBJ={this.state.wordOBJ} />
            </div>
        )
    }

}