import React from "react";
import FavoritesContainer from "./FavoritesContainer"
import HistoryContainer from "./HistoryContainer";
import { connect } from 'react-redux'
import "../profile.css"

class PersonalContainer extends React.Component {
    
    state = {
        historyFilter: "",
        favoritesFilter: "",
        displayFavorites: true
    }

    componentDidMount() {
        window.scroll({
            top: 0,
            behavior: 'auto'
        })
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
 
    flipDisplay = () => {
        let opp = !this.state.displayFavorites
        this.setState({
            displayFavorites: opp
        })
    }

    findFavs = () => {
        if (!!this.props.currentUser && this.state.favoritesFilter !== "") {
            let faves = this.props.currentUser.favorites.filter(fav => fav.word.includes(this.state.favoritesFilter) )
            console.log("finding new favs:", faves)
            return faves
        } else if (!!this.props.currentUser) {
            return this.props.currentUser.favorites
        }
    }

    findHistory = () => {
        if (!!this.props.currentUser && this.state.historyFilter !== "") {
            let faves = this.props.currentUser.searches.filter(fav => fav.word.includes(this.state.historyFilter))
            console.log("finding new favs:", faves)
            return faves
        } else if (!!this.props.currentUser) {
            return this.props.currentUser.searches
        }
    }


    render() {

        console.log("current user: ", this.props.currentUser)

        let faves = [];
        let hist = [];
        if (this.state.displayFavorites) {
            faves = this.findFavs()
        } else {
            hist = this.findHistory()
        }

        if (this.props.currentUser) {

            debugger

            return (
                <div id="personal-container">
                    <div className="card">

                        <div className="post main">
                            <div className="preview">Total Favorites: {!faves ? "0" : faves.length} <br />
                                Total Searches: {this.props.currentUser.searches.length}</div> 
                            <div className="counter">2nd</div>
                            <div className="detail">Welcome Back,</div>
                            <div className="details">{this.props.currentUser.username}</div>
                        </div>

                        <button className="submit" id="margin_50" onClick={() => this.props.history.push("search")}>GO TO SEARCH</button> 
                        
                        <div className="personal-search">
                                <input className="un" id="slim" name="favoritesFilter" value={this.state.favoritesFilter} onChange={this.handleChange} placeholder="Search Your Favorites" type="text" />
                                <input className="un" id="slim" name="historyFilter" value={this.state.historyFilter} onChange={this.handleChange} placeholder="Search Your Searches" type="text" />
                                <br /><br />
                        </div>
                        Check <span id="history_color">Searches</span> or <span id="favorite_color">Favorites</span>
                        <br /><br />
                        <label className="switch">
                            <input onClick={this.flipDisplay} type="checkbox"></input>
                            <span className="slider"></span>
                        </label>

                        <div className="content">
                            {this.state.displayFavorites ? <div className="favs_cont"><FavoritesContainer favorites={faves} /></div> : <div className="hist_cont"><HistoryContainer history={hist} /></div>}
                        </div>

                        <div className="fabs">
                            <div className="fab"></div>
                            <i className="avatar zmdi zmdi-account"></i>
                        </div>
                    </div>
                </div>
            )
        } else {
            this.props.history.push("home")
            return ("")
        }
    }

}

function msp(storedState) {
    return {
        currentUser: storedState.currentUser
    }
}

export default connect(msp, {})(PersonalContainer)