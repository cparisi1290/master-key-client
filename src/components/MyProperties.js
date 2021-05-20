import React from 'react';
import { connect } from 'react-redux';
// import PropertyCard from './PropertyCard'
import { Link } from 'react-router-dom'

const MyProperties = (props) => {
    const propertyCards = props.myProperties.length > 0 ? props.myProperties.map(p => (
        <div key={p.id} class="gallery">
            <a href={p.attributes.image}></a>
                <img src={p.attributes.image} alt={p.attributes.name} width="600" height="400"/>
            <h5><Link to={`/properties/${p.id}`} className='link'>{p.attributes.name}</Link></h5>
        </div>
        )) : null  
    return propertyCards
}

// const mapStateToProps = state => {
//     return {
//         properties: state.myProperties
//     }
// }

// destructure
const mapStateToProps = ({ myProperties }) => {
    return {
        myProperties
    }
}

// fn returned from invoking connect that now will supply MyProperties with
// props including state as described in mstp and actions as described in mdtp.
export default connect(mapStateToProps)(MyProperties)