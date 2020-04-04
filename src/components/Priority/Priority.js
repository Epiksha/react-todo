import React from 'react';
import PropTypes from 'prop-types';

const Priority = ({
    title,
    theme,
    isActive,
    toggleActive,
}) => (
    <button
        type="button"
        className={`
            button
            button--priority
            button--priority--${theme}
            ${isActive ? 'active' : ''}
        `}
        onClick={toggleActive}
    >
        {title}
    </button>
);

Priority.propTypes = {
    title: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    toggleActive: PropTypes.func.isRequired,
};

export default Priority;
