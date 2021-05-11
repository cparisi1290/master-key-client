import React from 'react';
import { Link    } from 'react-router-dom'

const PropertyCard = ({ property }) => {
    return (
        property ?
            <div>
                <p>{property.attributes.image}</p>
                <h3>{property.attributes.name}</h3>
                <p>{property.attributes.address}</p>
                <p>{property.attributes.city}, {property.attributes.state}, {property.attributes.zip}</p>
                <p>Bedrooms: {property.attributes.bedrooms}</p>
                <p>Bathrooms: {property.attributes.bathrooms}</p>
                <p>{property.attributes.occupied}</p>
                <p>{property.attributes.pets_allowed}</p>
                <p>Rent: ${property.attributes.rent_amount}</p>
                <Link to={`/properties/${property.id}/edit`}>Edit Property</Link>
            </div> : 
            <p>This is the property card.</p>
    )
}

export default PropertyCard
