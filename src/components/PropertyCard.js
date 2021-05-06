import React from 'react';


const PropertyCard = ({property}) => {
    return (
        <p>{property.attributes.name}</p>
    )
}

export default PropertyCard