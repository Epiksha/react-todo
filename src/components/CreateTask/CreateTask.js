import React from 'react';

const createTask = () => (
    <>
        <button
            type="button"
            className="button button--create"
        >
            +
        </button>

        <div className="create">
            <div
                className="
                    create__inner
                    ut-borderBox
                    ut-padding-4
                "
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

export default createTask;
