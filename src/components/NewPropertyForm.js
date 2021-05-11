import React from 'react';
import { connect } from 'react-redux'
// 1. grab updateNewPropertyForm from action creator
import { updateNewPropertyForm } from '../actions/newPropertyForm'
import { createProperty } from '../actions/myProperties'

// 3. redux gives back a prop called updateNewPropertyForm which when invoked, redux will now dispatch
const NewPropertyForm = ({updateNewPropertyForm, formData, history, createProperty, userId}) => {
    const {name, address, city, state, zip, bedrooms, bathrooms, image, occupied, pets_allowed, rent_amount} = formData

    const handleChange = (event) => {
        const {name, value} = event.target
        // 4. not just an invocation of action creator but the action built by the actions creator with the appropiate arguments
        updateNewPropertyForm(name, value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createProperty({
            ...formData,
            userId,
        }, history)            
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" name="name" onChange={handleChange} value={name}/><br/>
            <input type="text" placeholder="address" name="address" onChange={handleChange} value={address}/><br/>
            <input type="text" placeholder="city" name="city" onChange={handleChange} value={city}/><br/>
            <input type="text" placeholder="state" name="state" onChange={handleChange} value={state}/><br/>
            <input type="text" placeholder="zip" name="zip" onChange={handleChange} value={zip}/><br/>
            <input type="text" placeholder="bedrooms" name="bedrooms" onChange={handleChange} value={bedrooms}/>
            <input type="text" placeholder="bathrooms" name="bathrooms" onChange={handleChange} value={bathrooms}/><br/>
            <label>Occupied?<input type="checkbox" name="occupied?" onChange={handleChange} value={occupied}/></label><br/>
            <label>Pets Allowed?<input type="checkbox" name="pets_allowed?" onChange={handleChange} value={pets_allowed}/></label><br></br>
            <input type="text" placeholder="rent amount" name="rent_amount" onChange={handleChange} value={rent_amount}/><br/>
            <input type="text" placeholder="image" name="image" onChange={handleChange} value={image}/><br/>
            <input type="submit" value="Add Property"/>
        </form>

    )
}

// a callback
const mapStateToProps = reduxState => {
    const userId = reduxState.currentUser ? reduxState.currentUser.id : ""
    return {
        // comes from reducer and made avaiable as props in component
        formData: reduxState.newPropertyForm,
        userId
    }
}

// take updateNewPropertyForm from actin creator, give it back as a prop, and when called, dispatch action it returns
// 2. pass action creator to redux's connect fn as mapDispatchToProps
export default connect(mapStateToProps, {updateNewPropertyForm, createProperty})(NewPropertyForm)