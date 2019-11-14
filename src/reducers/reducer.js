const defaultState = {
    currentUser: null,
    currentWord: "",
    currentLang: "en-us"
}

function reducer(prevState = defaultState, action) {
    switch (action.type) {
        case "LOGOUT":
            console.log("logging out")
            localStorage.clear()
            return {...prevState, currentUser: null}
        case "LOGIN":
            console.log("logging in")
            localStorage.user_id = action.payload.id
            return { ...prevState, currentUser: action.payload}
        case "ADD_FAV":
            console.log("adding favorite")
            return { ...prevState, currentUser: action.payload }
        case "ADD_SEARCH":
            console.log("adding favorite")
            return { ...prevState, currentUser: action.payload }
        case "CHANGE_WORD":
            console.log("WORD IN REDUCER: ", action.payload)
            return {...prevState, currentWord: action.payload}
        case "CHANGE_LANG":
            console.log("LANGUAGE CODE IN REDUCER: ", action.payload)
            return { ...prevState, currentLang: action.payload }
        default:
            return prevState
    }
}

export default reducer