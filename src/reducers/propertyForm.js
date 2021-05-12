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

const propertyForm = (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_PROPERTY_FORM":
            const returnValue = {
                    ...state,
                    [action.formData.name]: action.formData.value
            }
            return returnValue
        case "RESET_NEW_PROPERTY_FORM":
            return initialState
        case "SET_FORM_DATA_FOR_EDIT": 
            return action.propertyFormData
        default:
            return state
    }
}


export default propertyForm;