const property = (state = [], action) => {
    switch (action.type) {
        case "SET_MY_PROPERTIES":
            return action.properties
        case "CLEAR_PROPERTIES" :
            return []
        default: 
            return state
    }
}

export default property