import React from 'react';
import PropTypes from 'prop-types';

const ParentDropdown = ({ parents, current, handlePropertyChange }) => (
    <section className="ut-paddingVert">
        <div>
            <select
                className="dropdown"
                value={current}
                onChange={(e) => handlePropertyChange(e.target.value, 'parent')}
            >
                <option
                    value="None"
                    aria-label="Select Parent Task"
                >
                    None
                </option>

                {parents.map((parent) => (
                    <option
                        value={parent}
                        key={Math.floor(Math.random() * 100000)}
                        aria-label="Select Parent Task"
                    >
                        {parent}
                    </option>
                ))}
            </select>
        </div>
    </section>
);

ParentDropdown.propTypes = {
    parents: PropTypes.arrayOf(PropTypes.string).isRequired,
    current: PropTypes.string.isRequired,
    handlePropertyChange: PropTypes.func.isRequired,
};

export default ParentDropdown;
