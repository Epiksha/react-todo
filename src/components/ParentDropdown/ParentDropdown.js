import React from 'react';
import PropTypes from 'prop-types';

const ParentDropdown = ({ parents, currentParent, handleParentChange }) => (
    <section className="ut-paddingVert">
        <div>
            <select
                className="dropdown"
                value={currentParent}
                onChange={(e) => handleParentChange(e.target.value)}
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
    currentParent: PropTypes.string.isRequired,
    handleParentChange: PropTypes.func.isRequired,
};

export default ParentDropdown;
