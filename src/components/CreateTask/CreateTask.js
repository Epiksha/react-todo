import React from 'react';
import PropTypes from 'prop-types';

import PriorityHolder from '../PriorityHolder/PriorityHolder';

const createTask = ({ isActive, toggleActive }) => (
    <>
        <button
            type="button"
            className="
                button
                button--create
            "
            onClick={toggleActive}
        >
            +
        </button>

        <div className="create">
            <div
                className={`
                    create__inner
                    ut-borderBox
                    ut-paddingVert-4
                    ut-paddingHorz-2
                    ${isActive ? 'active' : ''}
                `}
            >
                <textarea
                    name="create"
                    id="js-create"
                    className="
                        create__text
                        ut-borderBox
                        ut-padding
                    "
                    placeholder="What do you need to do?"
                />

                <PriorityHolder />
            </div>
        </div>
    </>
);

createTask.propTypes = {
    isActive: PropTypes.bool.isRequired,
    toggleActive: PropTypes.func.isRequired,
};

export default createTask;
