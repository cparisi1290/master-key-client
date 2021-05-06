import React from 'react';
import { connect } from 'react-redux';

const MyProperties = () => {
    return (

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

export default MyProperties(mapStateToProps)