import React from "react";
import ResultComponent from "./ResultComponent"
import { connect } from 'react-redux'

class Result extends React.Component {

    addFavorite =()=> {
        fetch("http://localhost:3000/favorite_word", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ word: this.props.key, user_id: this.props.currentUser.id})
        })
        .then(resp => resp.json())
        .then(response => {
            console.log(response)
        })
    }


    render() {
        let addFavButton = <button onClick={this.addFavorite} >add favorite</button>

        if (this.props.wordOBJ){
            console.log("REACHED RESULT")
            console.log("current user: ", this.props.currentUser)

            let etymologies = ""
            let definitions = ""
            let dialects = ""
            let phoneticSpelling = ""
            let phoneticSpellingComp = ""
            let entries = this.props.wordOBJ.entries[0]
            
            if (entries.etymologies) {
                etymologies = this.props.wordOBJ.entries[0].etymologies.map(ety => <ResultComponent id={ety} comp={ety} key={ety} />)
            }
            if (entries.senses) {
                definitions = this.props.wordOBJ.entries[0].senses[0].definitions.map(def => <ResultComponent id={def} comp={def} key={def} />)
            }
            // let examples = this.props.wordOBJ.entries[0].senses[0].examples.map(exp => <ResultComponent id={exp} comp={exp} />)
            if (this.props.wordOBJ.pronunciations !== undefined) {
                dialects = this.props.wordOBJ.pronunciations[0].dialects.map(dia => <ResultComponent id={dia} comp={dia} key={dia} />)
                phoneticSpelling = this.props.wordOBJ.pronunciations[0].phoneticSpelling
                if (phoneticSpelling !== {}) {
                    phoneticSpellingComp = <ResultComponent id={phoneticSpelling} comp={phoneticSpelling} /> 
                }
            }
            
            return (
                <div>
                    result:
                    <br/>
                    Etymologies: {etymologies}
                    <br />
                    Definitions: {definitions}
                    <br />
                    Dialects: {dialects}
                    <br />
                    Phonetic Spelling: {phoneticSpellingComp}
                    {/* <br />          this is broken for some reason
                    Examples: {examples} */}
                    <br /><br />
                    {this.props.currentUser ? addFavButton : ""}
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

export default connect(msp, {})(Result)