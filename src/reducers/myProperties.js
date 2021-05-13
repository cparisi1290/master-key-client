const property = (state = [], action) => {
    switch (action.type) {
        case "SET_MY_PROPERTIES":
            return action.properties
        case "CLEAR_PROPERTIES":
            return []
        case "ADD_PROPERTY":
            return state.concat(action.property)
            case "UPDATE_PROPERTY":
                // map over entire array in store, (map returns a copy, which is nondestructive, pure), property obj reps each member of prop array
                // compare that id against incoming property id that's passed along as action.property
                // if they match, update, if not, return current property
                return state.map(property => property.id === action.property.id ? action.property : property)
            case "DELETE_PROPERTY":
                return state.filter(property => property.id === action.propertyId ? false : true)
                default: 
            return state
    }
}

export default property