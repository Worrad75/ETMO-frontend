import React from "react";

export default function History(props) {
    return (
        <div className="post sec">
            <div id="history_background" className="preview">{props.word}</div>
            <div className="counter">SEARCH</div>
            <div className="detail">{/*total searches: 0*/}</div>
        </div>
    )

}

// {/* THIS WILL BE THE HISTORY OBJECTS */ }
// <div className="post ter">
//     <div className="preview">13th</div>
//     <div className="counter">14th</div>
//     <div className="detail">15th</div>
// </div>