// SYNC ACTION CREATORS

export const updateNewPropertyForm = (name, value) => {
    const formData = {name, value}
    console.log("formdata in acti on creaetor is", formData)
    return {
        type: "UPDATE_NEW_PROPERTY_FORM",
        formData: {name, value}
    }
}

// ASYNC ACTION CREATORS

