import React from "react";
import FavoritesContainer from "./FavoritesContainer"
// import { connect } from 'react-redux'

export default class PersonalContainer extends React.Component {
    
    render() {
        // console.log("USER IN PERSONAL CONT:", this.props.currentUser)
        return (
            <div>
                "personal container"
                <br />
                <button onClick={()  => this.props.history.push("search")}>GO TO SEARCH</button>
                <br />
                <FavoritesContainer />
            </div>
        )
    }

}

// function msp(storedState) {
//     return {
//         currentUser: storedState.currentUser
//     }
// }

// export default connect(msp, {})(PersonalContainer)