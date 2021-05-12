import {resetPropertyForm} from './propertyForm'

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

export const addProperty = property => {
    return {
        type: "ADD_PROPERTY",
        property
    }
}

export const updatePropertySuccess = property => {
    return {
      type: "UPDATE_PROPERTY",
      property
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

export const createProperty = (propertyData, history) => {
    return dispatch => {
        const railsPropertyData = {
            property: {
                name: propertyData.name,
                address: propertyData.address,
                city: propertyData.city,
                state: propertyData.state,
                zip: propertyData.zip,
                bedrooms: propertyData.bedrooms,
                bathrooms: propertyData.bathrooms,
                image: propertyData.image,
                occupied: propertyData.occupied,
                pets_allowed: propertyData.petsAllowed,
                rent_amount: propertyData.rentAmount,
                user_id: propertyData.userId
            }
        }
        return fetch("http://localhost:3001/api/v1/properties", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(railsPropertyData)
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                // add property to store
                dispatch(addProperty(resp.data))
                // clear form
                dispatch(resetPropertyForm())
                // go to property show page
                history.push(`/properties/${resp.data.id}`)
            }
        })
        .catch(console.log)
    }
}

export const updateProperty = (propertyData, history) => {
    return dispatch => {
        const railsPropertyData = {
            property: {
                name: propertyData.name,
                address: propertyData.address,
                city: propertyData.city,
                state: propertyData.state,
                zip: propertyData.zip,
                bedrooms: propertyData.bedrooms,
                bathrooms: propertyData.bathrooms,
                image: propertyData.image,
                occupied: propertyData.occupied,
                pets_allowed: propertyData.petsAllowed,
                rent_amount: propertyData.rentAmount,
                user_id: propertyData.userId
            }
        }
        return fetch(`http://localhost:3001/api/v1/properties/${propertyData.propertyId}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(railsPropertyData)
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                // add property to store
                dispatch(updatePropertySuccess(resp.data))
                // clear form
                dispatch(resetPropertyForm())
                // go to property show page
                history.push(`/properties/${resp.data.id}`)
            }
        })
        .catch(console.log)
    }
}