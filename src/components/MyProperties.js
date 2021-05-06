import React from 'react';
import { connect } from 'react-redux';
import PropertyCard from './PropertyCard'

const MyProperties = (props) => {
    const propertyCards = props.myProperties.length >0 ? props.myProperties.map(p => <PropertyCard property={p} key={p.id}/>) : []
    return (
        propertyCards
    )
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