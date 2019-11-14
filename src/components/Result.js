import React from "react";
import ResultComponent from "./ResultComponent";
import { connect } from 'react-redux';
import "../results.css"
import "../results_hover.scss"


class Result extends React.Component {

    addFavorite =()=> {
        fetch("http://localhost:3000/favorite_word", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ word: this.props.wordOBJ.text, user_id: this.props.currentUser.id})
        })
        .then(resp => resp.json())
        .then(response => {
            console.log("new favorite after fetch: ", response)
            let newUser = {...this.props.currentUser}
            newUser.favorites.push(response)
            console.log("new user: ", newUser)
            this.props.addNewFavorite(newUser)
        })
        .then(this.props.history.push(`/profile`))
    }

    addSearch = () => {
        fetch("http://localhost:3000/new_search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ word: this.props.wordOBJ.text, user_id: this.props.currentUser.id })
        })
        .then(resp => resp.json())
        .then(response => {
            console.log("new searches after fetch: ", response)
            let newUser = {...this.props.currentUser}
            newUser.searches.push(response)
            console.log("new user: ", newUser)
            this.props.addNewSearch(newUser)
        })
    }

    componentDidMount() {
        this.addSearch()
    }

    // My favorite method in the entire app :)
    syllabbify = (word) => {
        const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
        let syllables = word.match(syllableRegex);
        return syllables.join("•")
    }

    render() {
        if (this.props.wordOBJ){
            
            let definitions = ""
            let examples = []
            let dialects = ""
            let etymologies = ""
            let phoneticSpelling = ""
            let phoneticSpellingComp = ""
            let entries = this.props.wordOBJ.entries[0]

            if (entries.senses) {
                definitions = this.props.wordOBJ.entries[0].senses[0].definitions.map(def => <ResultComponent id={def} comp={def} key={def} />)
            }

            if (entries.senses[0].examples) {
                examples = this.props.wordOBJ.entries[0].senses[0].examples.map(exmp => exmp.text).map(def => <><ResultComponent id={def} comp={def} key={def} /> <br /></>)
            }

            if (entries.etymologies) {
                etymologies = this.props.wordOBJ.entries[0].etymologies.map(ety => <><ResultComponent id={ety} comp={ety} key={ety} /><br /></>)
            }

            if (this.props.wordOBJ.pronunciations !== undefined) {
                dialects = this.props.wordOBJ.pronunciations[0].dialects.map(dia => <ResultComponent id={dia} comp={dia} key={dia} />)
                phoneticSpelling = this.props.wordOBJ.pronunciations[0].phoneticSpelling
                if (phoneticSpelling !== {}) {
                    phoneticSpellingComp = <ResultComponent id={phoneticSpelling} comp={phoneticSpelling} /> 
                }
            }
            
            let syllabbified = this.syllabbify(this.props.wordOBJ.text)

            debugger

            return (
                <div className="results_cont" >
                    {this.props.currentUser ? <button className="submit" onClick={() => this.addFavorite()} >add favorite</button> : ""}
                    <br /><br />

                    <div id="central_word">{syllabbified}</div>

                    <div id="etymologies">
                        <div className="data-container">
                            <span id="etymo" className="btn">Etymologies</span>
                        </div>
                        <div id="etymologies_data">
                            {etymologies}
                        </div>
                    </div>


                    <div id="definitions">
                        <div className="data-container">
                            <span id="defs" className="btn">Definitions</span>
                        </div>
                        <div id="definitions_data">
                            {definitions.length > 0 ? definitions : "unavailable"}
                        </div>
                    </div>
                     
                    <div id="dialects">
                        <div className="data-container">
                            <span id="dias" className="btn">Dialects</span>
                        </div>
                        <div id="dialects_data">
                            {dialects.length > 0 ? dialects : "unavailable"}
                        </div>
                    </div>

                    <div id="phonetics">
                        <div className="data-container">
                            <span id="phon" className="btn">Phonetic Spelling</span>
                        </div>
                        <div id="phonetics_data">
                            {phoneticSpellingComp.length > 0 ? phoneticSpellingComp : "unavailable"}
                        </div>
                    </div>

                    <div id="examples">
                        <div className="data-container">
                            <span id="exam" className="btn">Examples</span>
                        </div>
                        <div id="examples_data">
                            {examples.length > 0 ? examples : "unavailable" }
                        </div>
                    </div>

                    
                </div>
            )
        } else {
            return ("")
        }
    } // end of render method
        
} // end of Result class


function msp(storedState) {
    return {
        currentUser: storedState.currentUser
    }
}

function mdp(dispatch) {
    return {
        addNewFavorite: (user) => { dispatch({ type: "ADD_FAV", payload: user }) },
        addNewSearch: (user) => { dispatch({ type: "ADD_SEARCH", payload: user }) }
    }
}

export default connect(msp, mdp)(Result)