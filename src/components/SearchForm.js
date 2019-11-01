import React from "react";

export default class SearchForm extends React.Component {

    state = {
        searchTerm: ""
    }

    onChange = e => {
        console.log("changing: ", this.state.searchTerm)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        console.log("re-rendering search form")
        return (
            <div>
                <h3>SEARCH FORM</h3>
                <div>
                    <form className="word-search-form" onSubmit={(e) => this.props.submitHandler(e, this.state.searchTerm)}>
                        <input type="text" name="searchTerm" placeholder="spelling of word" onChange={this.onChange} />
                        <br />
                        <input id="word-search-submit" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }

}