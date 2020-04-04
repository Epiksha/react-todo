import React from 'react';
import PropTypes from 'prop-types';

const Priority = ({ type, currentPriority, changePriority }) => (
    <button
        type="button"
        className={`
            button
            button--priority
            button--priority--${type.toLowerCase()}
            ${currentPriority === type ? 'active' : ''}
        `}
        onClick={() => changePriority(type)}
    >
        {type}
    </button>
);

Priority.propTypes = {
    type: PropTypes.string.isRequired,
    currentPriority: PropTypes.string.isRequired,
    changePriority: PropTypes.func.isRequired,
};

export default Priority;
