import React from "react";

export default function Favorite(props) {
    return (
        <div className="post sec">
            <div className="preview">FAVORITE</div>
            <div className="counter">{props.favorite.word}</div>
            <div className="detail">total favorites: 0</div>
        </div>
    )

}

/* THIS WILL BE THE FAVORITE OBJECTS */
/* <div className="post sec">
    <div className="preview">7th</div>
    <div className="counter">8th</div>
    <div className="detail">9th</div>
</div> */