const defaultState = {
    currentUser: null,
    currentWord: "example"
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
        case "CHANGE_WORD":
            console.log("changing word: ", action.payload)
            return {...prevState, currentWord: action.payload}
        default:
            return prevState
    }
}

export default reducer