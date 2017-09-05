import React from 'react';
import PropTypes from 'prop-types';
import logLifecycle from '../hoc/LogLifecycle';

function CardComponent({title, children}) {
    return (
        <div className="card col-md-5 mb-0 shadow">
            <p className="display-4"> {title} </p>
            <div className="card-body mr-0 mb-0">
                {children}
            </div>
        </div>
    );
}

CardComponent.propTypes = {
    title: PropTypes.string.isRequired
};

export default logLifecycle(CardComponent);