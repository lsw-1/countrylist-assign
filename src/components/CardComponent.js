import React from 'react'
import PropTypes from 'prop-types'

function CardComponent(props) {
    return (
        <div className="card col-md-5">
            <p className="card-header"> {props.title} </p>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

CardComponent.propTypes = {
    title: PropTypes.string.isRequired
}

export default CardComponent