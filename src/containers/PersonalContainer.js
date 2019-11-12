import React from "react";
import FavoritesContainer from "./FavoritesContainer"
import HistoryContainer from "./HistoryContainer";
import { connect } from 'react-redux'
import "../profile.css"

class PersonalContainer extends React.Component {
    
    state = {
        historyFilter: "",
        favoritesFilter: ""
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

    findNewFavs = () => {
        if (!!this.props.currentUser && this.state.favoritesFilter !== "") {
            let faves = this.props.currentUser.favorites.filter(fav => fav.word.includes(this.state.favoritesFilter) )
            console.log("finding new favs:", faves)
            return faves
        } else if (!!this.props.currentUser) {
            return this.props.currentUser.favorites
        }
    }

    render() {
        let faves = this.findNewFavs()
        if (this.props.currentUser) {
            return (
                <div id="personal-container">
                    {/* <br />
                    <FavoritesContainer favorites={this.props.currentUser.favorites} />
                    <HistoryContainer searches={this.props.currentUser.searches}/>
                    <br />
                    */}
                    <button className="submit" onClick={() => this.props.history.push("search")}>GO TO SEARCH</button> 
                    <div className="card">
                        
                    <div className="post main">
                        <div className="preview">This will show the number of <br/> favs and searches</div>
                        <div className="counter">2nd</div>
                        <div className="detail">Welcome Back,</div>
                        <div className="details">{this.props.currentUser.username}</div>
                    </div>

                    <div className="personal-search">
                            <input className="un" id="slim" name="favoritesFilter" value={this.state.favoritesFilter} onChange={this.handleChange} placeholder="Search Your Favorites" type="text" />
                            <input className="un" id="slim" name="historyFilter" value={this.state.historyFilter} onChange={this.handleChange} placeholder="Search Your History" type="text" />
                            <br /><br />
                            {/* <button className="submit" onClick={() => this.findNewWords()} >Filter</button> */}
                    </div>

                <div className="content">
                            <div className="favs_cont">
                                <FavoritesContainer favorites={faves}/>
                                <br/>
                                {/* history container */}
                            </div>
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