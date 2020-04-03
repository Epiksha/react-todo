import React from 'react';
import PropTypes from 'prop-types';

const createTask = ({ active, toggleActive }) => (
    <>
        <button
            type="button"
            className="button button--create"
            onClick={toggleActive}
        >
            +
        </button>

        <div className="create">
            <div
                className={`create__inner ut-borderBox ut-padding-4 ${active ? 'active' : ''}`}
            >
                <textarea
                    name="create"
                    id="js-create"
                    className="
                        create__text
                        ut-borderBox
                    "
                    placeholder="What do you need to do?"
                />
            </div>
        </div>
    </>
);

createTask.propTypes = {
    active: PropTypes.bool.isRequired,
    toggleActive: PropTypes.func.isRequired,
};

export default createTask;
