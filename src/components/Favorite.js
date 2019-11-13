import React from "react";

export default function Favorite(props) {

    return (
        <div className="post sec" onClick={() => props.deleteFavorite(props.favorite.id)}>
            <div className="preview">{props.favorite.word}</div>
            <div className="counter">FAVORITE</div>
            <div className="detail">{/*total favorites: 0*/}</div> 
        </div>
    )

}

/* THIS WILL BE THE FAVORITE OBJECTS */
/* <div className="post sec">
    <div className="preview">7th</div>
    <div className="counter">8th</div>
    <div className="detail">9th</div>
</div> */