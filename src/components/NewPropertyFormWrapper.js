import React from 'react';
import { createProperty } from '../actions/myProperties'
import { connect } from 'react-redux'
import PropertyForm from './PropertyForm';

const NewPropertyFormWrapper = ({history, createProperty}) => {

    const handleSubmit = (formData, userId) => {
        createProperty({
            ...formData,
            userId,
        }, history)            
    }

   return <PropertyForm history={history} handleSubmit={handleSubmit}/>
}

export default connect(null, {createProperty})(NewPropertyFormWrapper);