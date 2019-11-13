import React from "react";
import History from "../components/History"

export default class HistoryContainer extends React.Component {
    
    render() {
        console.log("in hist cont")
        let objs = this.props.history.map((search) => <History key={search.id} word={search.word}></History>)
        return (
            <div>
                {objs}
            </div>
        )
    }

}