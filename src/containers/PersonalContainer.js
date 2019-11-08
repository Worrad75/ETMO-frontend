import React from "react";
import FavoritesContainer from "./FavoritesContainer"
import HistoryContainer from "./HistoryContainer";
import { connect } from 'react-redux'

class PersonalContainer extends React.Component {
    
    render() {
        console.log("USER IN PERSONAL CONT:", this.props.currentUser)
        if (this.props.currentUser) {
            return (
                <div>
                    "personal container"
                    <br />
                    <button onClick={()  => this.props.history.push("search")}>GO TO SEARCH</button>
                    <br />
                    <FavoritesContainer favorites={this.props.currentUser.favorites} />
                    <HistoryContainer searches={this.props.currentUser.searches}/>
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