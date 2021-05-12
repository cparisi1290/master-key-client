import React from 'react';
import { setFormDataForEdit } from '../actions/propertyForm'
import { updateProperty } from '../actions/myProperties'
import { connect } from 'react-redux'
import PropertyForm from './PropertyForm';

class EditPropertyFormWrapper extends React.Component {

    componentDidMount() {
        this.props.property && this.props.setFormDataForEdit(this.props.property)
    }
    
    handleSubmit = (formData, userId) => {
        const {updateProperty, property, history} = this.props
        updateProperty({
            ...formData,
            propertyId: property.id,
            userId,
        }, history)            
    }
// wrapper has access to history
   render () {
        const {history, handleSubmit} = this.props
       return <PropertyForm editMode handleSubmit={this.handleSubmit}/>
       
   } 
}

export default connect(null, {updateProperty, setFormDataForEdit})(EditPropertyFormWrapper);