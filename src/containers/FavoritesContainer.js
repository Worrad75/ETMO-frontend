import React from "react";
import Favorite from "../components/Favorite"

export default class FavoritesContainer extends React.Component {

    state = {
        favorites: []
    }

    render() {
        return (
            <div>
                "favorites container"
                <br />
                {this.state.favorites.map((favorite) => <Favorite favorite={favorite} />)}
            </div>
        )
    }

}