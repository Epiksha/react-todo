import React from 'react';
import PropTypes from 'prop-types';

const Priority = ({
    current,
    priority,
    handlePropertyChange,
}) => (
    <button
        type="button"
        className={`
            button
            button--priority
            button--priority--${priority.toLowerCase()}
            ${current === priority ? 'active' : ''}
        `}
        onClick={() => handlePropertyChange(priority, 'priority')}
    >
        {priority}
    </button>
);

Priority.propTypes = {
    priority: PropTypes.string.isRequired,
    current: PropTypes.string.isRequired,
    handlePropertyChange: PropTypes.func.isRequired,
};

export default Priority;
