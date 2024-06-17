import React from 'react';
import PropTypes from 'prop-types';

const BaseTemplate = ({ className = null, children }) => {
    return (
        <main className={className}>
            {children}
        </main>
    );
};

BaseTemplate.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default BaseTemplate;

