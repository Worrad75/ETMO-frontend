import React from "react";
import Favorite from "../components/Favorite"

export default class FavoritesContainer extends React.Component {

    state = {
        favorites: []
    }

    componentDidMount() {
        this.setState({
            favorites: this.props.favorites
        })
    }

    deleteFavorite = (id) => {
        return fetch(`http://localhost:3000/unfavorite_word/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(response => {
            let freshFavs = this.state.favorites.filter(obj => obj.id !== response.id)
            this.setState({
                favorites: freshFavs
            }, console.log("done"))
    })
}

    render() {
        let objs = this.state.favorites.map((favorite) => <Favorite key={favorite.id} favorite={favorite} deleteFavorite={this.deleteFavorite}></Favorite>)
        return (
            <div >
                {objs.length > 0 ? objs : <div id="empty" > <br /> <br /> <br /><br /> <br /><br /> You don't have any favorites yet :( <br /><br /><br /><br />
                    <img alt="empty" id="empty_img" src={require('../assets/sad.png')} />
                    <br /> <br /><br /> Try searching for some!</div>}
            </div>
        )
    }

}