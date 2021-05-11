const initialState = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    bedrooms: "",
    bathrooms: "",
    image: "",
    occupied: "",
    pets_allowed: "",
    rent_amount: "",
}

const newPropertyForm = (state=initialState, action) => {
    console.log("incoming action is", action)
    switch (action.type) {
        case "UPDATE_NEW_PROPERTY_FORM":
            const returnValue = {
                    ...state,
                    [action.formData.name]: action.formData.value
            }
            console.log("return value in reducer is", returnValue)
            return {
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "RESET_NEW_PROPERTY_FORM":
            return initialState
        default:
            return state
    }

}

export default newPropertyForm;