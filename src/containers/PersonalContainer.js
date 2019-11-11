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

    handleSearch = (e) => {
        e.preventDefault()
        console.log("in search handler :)")
    }

    render() {
        console.log("USER IN PERSONAL CONT:", this.props.currentUser)
        if (this.props.currentUser) {
            return (
                <div id="personal-container">
                    {/* <br />
                    <FavoritesContainer favorites={this.props.currentUser.favorites} />
                    <HistoryContainer searches={this.props.currentUser.searches}/>
                    <br />
                    <button onClick={() => this.props.history.push("search")}>GO TO SEARCH</button> */}
                    <div className="card">
                        <div className="content">
                            {/* WHERE ARE WE */}
                            <div className="post main">
                                <div className="preview">This will show the number of <br/> favs and searches</div>
                                <div className="counter">2nd</div>
                                <div className="detail">It's You!</div>
                                <div className="details">Name of user</div>
                            </div>
                        <div className="personal-search">
                            <form onSubmit={(e)=> this.handleSearch(e)}>
                                    <input className="un" id="slim" name="favoritesFilter" value={this.state.username} onChange={this.handleChange} placeholder="Search Your Favorites" type="text" />
                                    <input className="un" id="slim" name="historyFilter" value={this.state.username} onChange={this.handleChange} placeholder="Search Your History" type="text" />
                                    <br/>
                                    <button className="submit" type="submit" >Filter</button>
                            </form>
                        </div>

                            <br/>
                            {/* THIS WILL BE THE FAVORITE OBJECTS */}
                            <div className="post sec">
                                <div className="preview">7th</div>
                                <div className="counter">8th</div>
                                <div className="detail">9th</div>
                            </div>
                            {/* THIS WILL BE THE HISTORY OBJECTS */}
                            <div className="post ter">
                                <div className="preview">13th</div>
                                <div className="counter">14th</div>
                                <div className="detail">15th</div>
                            </div>
                        </div>
                        <div className="fabs">
                            <div className="fab"></div>
                            <i className="avatar zmdi zmdi-account"></i>
                        </div>
                        <div className="user">
                            <div className="socials">
                                <div className="social"><i className="zmdi zmdi-twitter"></i></div>
                                <div className="social"><i className="zmdi zmdi-github"></i></div>
                                <div className="social"><i className="zmdi zmdi-google-plus"></i></div>
                                <div className="social"><i className="zmdi zmdi-codepen"></i></div>
                            </div>
                            <div className="profiles">
                                <div className="profile"><span>51</span>Upvoted</div>
                                <div className="profile"><span>9</span>Created</div>
                                <div className="profile"><span>9</span>Showcased</div>
                                <div className="profile"><span>1</span>Collections</div>
                                <div className="profile"><span>2</span>Followers</div>
                                <div className="profile"><span>5</span>Following</div>
                            </div>
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