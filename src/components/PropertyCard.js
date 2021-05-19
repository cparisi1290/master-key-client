import React from 'react';
import { Card, Accordion, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PropertyCard = ({ property }) => {
    return (
        property ?
        <div>

            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={property.attributes.image} />
            <Card.Body>
                <Card.Title>{property.attributes.name}</Card.Title>
                <Card.Text>
                Rent: ${property.attributes.rent_amount}
                </Card.Text>
                <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        View Details
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        {property.attributes.address} <br/>
                        {property.attributes.city}, {property.attributes.state}, {property.attributes.zip}<br/>
                        Bedrooms: {property.attributes.bedrooms}<br/>
                        Bathrooms: {property.attributes.bathrooms}<br/>
                        <Link to={`/properties/${property.id}/edit`}>Edit Property</Link>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </Card.Body>
            </Card>

        </div> : null
    )
}

export default PropertyCard

            // <div>
            //     <p>{property.attributes.image}</p>
            //     <h3>{property.attributes.name}</h3>
            //     <p>{property.attributes.address}</p>
            //     <p>{property.attributes.city}, {property.attributes.state}, {property.attributes.zip}</p>
            //     <p>Bedrooms: {property.attributes.bedrooms}</p>
            //     <p>Bathrooms: {property.attributes.bathrooms}</p>
            //     <p>{property.attributes.occupied}</p>
            //     <p>{property.attributes.pets_allowed}</p>
            //     <p>Rent: ${property.attributes.rent_amount}</p>
            //     <Link to={`/properties/${property.id}/edit`}>Edit Property</Link>
            // </div> : 
            // <p>This is the property card.</p>