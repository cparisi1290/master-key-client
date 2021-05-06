const property = (state = [], action) => {
    switch (action.type) {
        case "SET_MY_PROPERTIES":
            return action.properties
        default: 
            return state
    }
}

export default property