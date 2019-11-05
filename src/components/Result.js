import React from "react";
import ResultComponent from "./ResultComponent"

export default function Result(props) {

    if (props.wordOBJ){
        console.log("REACHED RESULT")
        // let examples = props.wordOBJ.entries[0].senses[0].examples.map(exp => <ResultComponent id={exp} comp={exp} />)
        let etymologies = props.wordOBJ.entries[0].etymologies.map(ety => <ResultComponent id={ety} comp={ety} key={ety} />)
        let definitions = props.wordOBJ.entries[0].senses[0].definitions.map(def => <ResultComponent id={def} comp={def} key={def} />)
        let dialects = props.wordOBJ.pronunciations[0].dialects.map(dia => <ResultComponent id={dia} comp={dia} key={dia} />)

        let phoneticSpelling = props.wordOBJ.pronunciations[0].phoneticSpelling
        let phoneticSpellingComp = <ResultComponent id={phoneticSpelling} comp={phoneticSpelling} /> 


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
                
            </div>
        )
    } else {
        return ("")
    }

}