const defaultState = {
    currentUser: null
}

function reducer(prevState = defaultState, action) {
    switch (action.type) {
        case "LOGOUT":
            return {...prevState, currentUser:null}
        case "LOGIN":
            console.log("payload:", action.payload)
            return { ...prevState, currentUser: action.payload}
        case "3":
            return {...prevState}
        default:
            return prevState
    }
}

export default reducer