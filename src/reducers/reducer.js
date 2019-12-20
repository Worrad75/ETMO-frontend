const defaultState = {
    currentUser: null,
    currentWord: "",
    currentLang: "en-us"
}

function reducer(prevState = defaultState, action) {
    switch (action.type) {
        case "LOGOUT":
            localStorage.clear()
            return {...prevState, currentUser: null}
        case "LOGIN":
            localStorage.user_id = action.payload.id
            return { ...prevState, currentUser: action.payload}
        case "ADD_FAV":
            return { ...prevState, currentUser: action.payload }
        case "ADD_SEARCH":
            return { ...prevState, currentUser: action.payload }
        case "CHANGE_WORD":
            return {...prevState, currentWord: action.payload}
        case "CHANGE_LANG":
            return { ...prevState, currentLang: action.payload }
        default:
            return prevState
    }
}

export default reducer