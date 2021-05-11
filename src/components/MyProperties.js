import React from 'react';
import { connect } from 'react-redux';
// import PropertyCard from './PropertyCard'
import { Link } from 'react-router-dom'

const MyProperties = (props) => {
    const propertyCards = props.myProperties.length > 0 ? props.myProperties.map(p => (<p key={p.id}><Link to={`/properties/${p.id}`}>{p.attributes.name}</Link></p>)) : <p>This is propteries with an empty array of properties</p>
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