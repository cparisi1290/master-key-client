import React from 'react';
import { connect } from 'react-redux'
// 1. grab updatePropertyForm from action creator
import { updatePropertyForm } from '../actions/propertyForm'

// 3. redux gives back a prop called updatePropertyForm which when invoked, redux will now dispatch
const PropertyForm = ({updatePropertyForm, formData, userId, property, handleSubmit, editMode}) => {
    const {name, address, city, state, zip, bedrooms, bathrooms, image, rentAmount} = formData

    const handleChange = event => {
        const {name, value} = event.target
        // 4. not just an invocation of action creator but the action built by the actions creator with the appropiate arguments
        updatePropertyForm(name, value)
    }

    return (
        <form onSubmit={event => {
            event.preventDefault()
            handleSubmit(formData)
            }}>
            <input type="text" placeholder="name" name="name" onChange={handleChange} value={name}/><br/>
            <input type="text" placeholder="address" name="address" onChange={handleChange} value={address}/><br/>
            <input type="text" placeholder="city" name="city" onChange={handleChange} value={city}/><br/>
            <input type="text" placeholder="state" name="state" onChange={handleChange} value={state}/><br/>
            <input type="text" placeholder="zip" name="zip" onChange={handleChange} value={zip}/><br/>
            <input type="text" placeholder="bedrooms" name="bedrooms" onChange={handleChange} value={bedrooms}/><br/>
            <input type="text" placeholder="bathrooms" name="bathrooms" onChange={handleChange} value={bathrooms}/><br/>
            <input type="text" placeholder="rent amount" name="rentAmount" onChange={handleChange} value={rentAmount}/><br/>
            <input type="text" placeholder="image" name="image" onChange={handleChange} value={image}/><br/>
            <input type="submit" value={editMode ? "Update Property" : "Add Property"}/>
        </form>

    )
}

// a callback
const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        // comes from reducer and made avaiable as props in component
        formData: state.propertyForm,
        userId
    }
}

// take updatePropertyForm from actin creator, give it back as a prop, and when called, dispatch action it returns
// 2. pass action creator to redux's connect fn as mapDispatchToProps
export default connect(mapStateToProps, {updatePropertyForm})(PropertyForm)