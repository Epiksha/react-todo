import React from 'react';
import PropTypes from 'prop-types';

import PriorityHolder from '../PriorityHolder/PriorityHolder';
import ParentHolder from '../ParentHolder/ParentHolder';

const createTask = ({ tasks, isActive, toggleActive }) => (
    <>
        <button
            type="button"
            className={`
                button
                button--create
                ${isActive ? 'active' : ''}
            `}
            onClick={toggleActive}
        >
            +
        </button>

        <div
            className={`
            create
            ${isActive ? 'active' : ''}
        `}
        >
            <div
                className="
                    create__inner
                    ut-borderBox
                    ut-paddingVert-4
                    ut-paddingHorz-2
                "
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

                <PriorityHolder tasks={tasks} />
                <ParentHolder tasks={tasks} />
            </div>
        </div>
    </>
);

createTask.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
    })).isRequired,
    isActive: PropTypes.bool.isRequired,
    toggleActive: PropTypes.func.isRequired,
};

export default createTask;
