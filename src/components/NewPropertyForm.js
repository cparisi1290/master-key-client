import React from 'react';
import { connect } from 'react-redux'
// 1. grab updateNewPropertyForm from action creator
import { updateNewPropertyForm } from '../actions/newPropertyForm'

// 3. redux gives back a prop called updateNewPropertyForm which when invoked, redux will now dispatch
const NewPropertyForm = ({updateNewPropertyForm, name, address, city, state, zip, bedrooms, bathrooms, occupied, pets_allowed, rent_amount, history}) => {

    const handleChange = (event) => {
        console.log("triggered")
        const {name, value} = event.target
        // 4. not just an invocation of action creator but the action built by the actions creator with the appropiate arguments
        updateNewPropertyForm(name, value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
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
            <input type="text" placeholder="occupied?" name="occupied?" onChange={handleChange} value={occupied}/><br/>
            <input type="text" placeholder="pets allowed?" name="pets_allowed?" onChange={handleChange} value={pets_allowed}/><br/>
            <input type="text" placeholder="rent amount" name="rent_amount" onChange={handleChange} value={rent_amount}/><br/>
            <input type="submit" value="Add Property"/>
        </form>

    )
}

// a callback
const mapStateToProps = ({name, address, city, state, zip, bedrooms, bathrooms, image, occupied, pets_allowed, rent_amount}) => {
    return {
        // comes from reducer and made avaiable as props in component
        name, address, city, state, zip, bedrooms, bathrooms, image, occupied, pets_allowed, rent_amount
    }
}

// take updateNewPropertyForm from actin creator, give it back as a prop, and when called, dispatch action it returns
// 2. pass action creator to redux's connect fn as mapDispatchToProps
export default connect(mapStateToProps, {updateNewPropertyForm})(NewPropertyForm)