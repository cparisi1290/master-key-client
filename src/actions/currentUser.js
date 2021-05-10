import { resetLoginForm} from './loginForm'
import { resetSignupForm} from './signupForm'
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

export const clearProperties = () => {
    return {
        type: "CLEAR_PROPERTIES"
    }
}

// ASYNC ACTION CREATORS

export const signup = (credentials, history) => {
    return (dispatch) => {
        const userInfo = {
            user: credentials
        }
        return fetch("http://localhost:3001/api/v1/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setCurrentUser(resp.data)) // < same as {type: "SET_CURRENT_USER", user:user}
                dispatch(getMyProperties()) //
                dispatch(resetSignupForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

// must send request to backend to login
export const login = (credentials, history) => {
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
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

// clear session
export const logout = (event) => {
    // optimistic logout
    return (dispatch) => {
        dispatch(clearCurrentUser())
        dispatch(clearProperties())
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
