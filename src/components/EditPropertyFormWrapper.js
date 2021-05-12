import React from 'react';
import { setFormDataForEdit, resetPropertyForm } from '../actions/propertyForm'
import { updateProperty } from '../actions/myProperties'
import { connect } from 'react-redux'
import PropertyForm from './PropertyForm';

class EditPropertyFormWrapper extends React.Component {

    componentDidMount() {
        // where fetch request sare made
        this.props.property && this.props.setFormDataForEdit(this.props.property)
    }

    componentDidUpdate(prevProps) {
        // if property is loaded now and wasn't there before, then load previous data ex http://localhost:3000/properties/16/edit
        this.props.property && !prevProps.property && this.props.setFormDataForEdit(this.props.property)
    }

    componentWillUnmount() {
        // clear form if leaving edit property wrapper to new property form or anywhere else
        this.props.resetPropertyForm()
      }

    handleSubmit = (formData) => {
        const {updateProperty, property, history} = this.props
        updateProperty({
            ...formData,
            propertyId: property.id,
        }, history)            
    }
// wrapper has access to history
   render () {
        const {history, handleSubmit} = this.props
       return <PropertyForm editMode handleSubmit={this.handleSubmit}/>
       
   } 
}

export default connect(null, {updateProperty, setFormDataForEdit, resetPropertyForm})(EditPropertyFormWrapper);