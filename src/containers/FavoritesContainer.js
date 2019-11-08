import React from "react";
import Favorite from "../components/Favorite"

export default class FavoritesContainer extends React.Component {

    state = {
        favorites: this.props.favorites
    }

    render() {
        let objs = this.state.favorites.map((favorite) => <Favorite key={favorite.id} favorite={favorite}></Favorite>)
        return (
            <div>
                "favorites container"
                <br />
                {objs}
            </div>
        )
    }

}