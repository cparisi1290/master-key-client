const property = (state = [], action) => {
    switch (action.type) {
        case "SET_MY_PROPERTIES":
            return action.properties
        case "CLEAR_PROPERTIES":
            return []
        case "ADD_PROPERTIES":
            return state.concat(action.property)
        default: 
            return state
    }
}

export default property