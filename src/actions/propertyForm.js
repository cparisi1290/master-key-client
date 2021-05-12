// SYNC ACTION CREATORS

export const updatePropertyForm = (name, value) => {
    const formData = {name, value}
    return {
        type: "UPDATE_NEW_PROPERTY_FORM",
        formData
    }
}

export const resetPropertyForm = () => {
    return {
        type: "RESET_NEW_PROPERTY_FORM"
    }
}

export const setFormDataForEdit = (property) => {
    const propertyFormData = {
        name: property.attributes.name,
        address: property.attributes.address,
        city: property.attributes.city,
        state: property.attributes.state,
        zip: property.attributes.zip,
        bedrooms: property.attributes.bedrooms,
        bathrooms: property.attributes.bathrooms,
        image: property.attributes.image,
        occupied: property.attributes.occupied,
        pets_allowed: property.attributes.pets_allowed,
        rent_amount: property.attributes.rent_amount
      }
    return {
        type: "SET_FORM_DATA_FOR_EDIT",
        propertyFormData
    }
}

// ASYNC ACTION CREATORS

