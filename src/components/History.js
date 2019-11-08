import React from "react";

export default function History(props) {
    console.log("PROPS.WORD IN HISTORY OBJ: ", props.word )
    return (
        <div>
            Word: {props.word}
        </div>
    )

}