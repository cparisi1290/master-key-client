import { resetLoginForm} from './loginForm'
import { getMyProperties } from './myProperties'

// SYNC ACTION CREATORS 
export const setCurrentUser = (user) => {
    return {
        type:"SET_CURRENT_USER",
        user // payload
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

// ASYNC ACTION CREATORS 

// must send request to backend to login
export const login = credentials => {
    return (dispatch) => {
        return fetch("http://localhost:3001/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setCurrentUser(resp.data)) // < same as {type: "SET_CURRENT_USER", user:user}
                dispatch(getMyProperties()) //
                dispatch(resetLoginForm())
            }
        })
        .catch(console.log)
    }
}

// clear session
export const logout = () => {
    // optimistic logout
    return (dispatch) => {
        dispatch(clearCurrentUser())
        return fetch("http://localhost:3001/api/v1/logout", {
            credentials: "include",
            method: "DELETE"
        })
    }
}

export const getCurrentUser = () => {
    return (dispatch) => {
        return fetch("http://localhost:3001/api/v1/get_current_user", {
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
                dispatch(setCurrentUser(resp.data))
            }
        })
        .catch(console.log)
    }
}
