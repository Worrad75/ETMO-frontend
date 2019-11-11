import React from "react";
import History from "../components/History"

export default class HistoryContainer extends React.Component {

    state = {
        history: this.props.searches
    }

    render() {
        let objs = this.state.history.map((search) => <History key={search.id} word={search.word}></History>)
        return (
            <div className="history_cont" id="to-right">
                "history container"
                <br />
                {objs}
            </div>
        )
    }

}