// SYNC ACTION CREATORS 
export const setMyProperties = (properties) => {
    return {
        type:"SET_MY_PROPERTIES",
        properties // payload
    }
}

export const clearProperties = () => {
    return {
        type: "CLEAR_PROPERTIES"
    }
}

// ASYNC ACTION CREATORS

export const getMyProperties = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/properties", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setMyProperties(resp.data))
            }
        })
        .catch(console.log)
    }
}