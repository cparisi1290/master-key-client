// SYNC ACTION CREATORS

export const updateNewPropertyForm = (name, value) => {
    const formData = {name, value}
    return {
        type: "UPDATE_NEW_PROPERTY_FORM",
        formData
    }
}

export const resetNewPropertyForm = () => {
    return {
        type: "RESET_NEW_PROPERTY_FORM"
    }
}

// ASYNC ACTION CREATORS

