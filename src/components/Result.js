import React from "react";
import ResultComponent from "./ResultComponent"


export default function Result(props) {

    if (props.wordOBJ.results[0].lexicalEntries[0]){
    
        console.log(props)

        const infoPath = props.wordOBJ.results[0].lexicalEntries[0]

        let examples = infoPath.entries[0].senses[0].examples.map(exp => <ResultComponent id={exp} comp={exp} />)
        let etymologies = infoPath.entries[0].etymologies.map(ety => <ResultComponent id={ety} comp={ety} />)
        let definitions = infoPath.entries[0].senses[0].definitions.map(def => <ResultComponent id={def} comp={def} />)
        let dialects = infoPath.pronunciations[0].dialects.map(dia => <ResultComponent id={dia} comp={dia} />)

        let phoneticSpelling = infoPath.pronunciations[0].phoneticSpelling
        let phoneticSpellingComp = <ResultComponent id={phoneticSpelling} comp={phoneticSpelling} /> 

        console.log("etymologies: ", etymologies)
        console.log("definitions: ", definitions)
        console.log("examples: ", examples)
        console.log("dialects: ", dialects)
        console.log("phoneticSpelling: ", phoneticSpelling)
        debugger
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
            </div>
        )
    } else {
        return ("")
    }

}