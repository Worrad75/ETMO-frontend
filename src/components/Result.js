import React from "react";
import ResultComponent from "./ResultComponent"
import { connect } from 'react-redux'

class Result extends React.Component {

    
    render() {
        
        let addFavButton = <button>add favorite</button>
        if (this.props.wordOBJ){
            console.log("REACHED RESULT")
            console.log("current user: ", this.props.currentUser)
            // let examples = this.props.wordOBJ.entries[0].senses[0].examples.map(exp => <ResultComponent id={exp} comp={exp} />)
            let etymologies = this.props.wordOBJ.entries[0].etymologies.map(ety => <ResultComponent id={ety} comp={ety} key={ety} />)
            let definitions = this.props.wordOBJ.entries[0].senses[0].definitions.map(def => <ResultComponent id={def} comp={def} key={def} />)
            let dialects = this.props.wordOBJ.pronunciations[0].dialects.map(dia => <ResultComponent id={dia} comp={dia} key={dia} />)
            
            let phoneticSpelling = this.props.wordOBJ.pronunciations[0].phoneticSpelling
            let phoneticSpellingComp = <ResultComponent id={phoneticSpelling} comp={phoneticSpelling} /> 
            
            // debugger
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