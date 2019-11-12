import React from "react";

export default function History(props) {
    // console.log("PROPS.WORD IN HISTORY OBJ: ", props.word )
    return (
        <div className="post ter">
            <div className="preview">PAST SEARCH</div>
            <div className="counter">{props.word}</div>
            <div className="detail">total searches: 0</div>
        </div>
    )

}

// {/* THIS WILL BE THE HISTORY OBJECTS */ }
// <div className="post ter">
//     <div className="preview">13th</div>
//     <div className="counter">14th</div>
//     <div className="detail">15th</div>
// </div>