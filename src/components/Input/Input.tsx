import React, { useEffect, useState } from 'react';
import Icon from '../Icon/Icon';
import InputProps from './Input.types';

export const Input = ({
    autoComplete = '',
    classes = '',
    errors = [],
    handler,
    id = '',
    isActive = false,
    label = '',
    placeholder = '',
    required = false,
    type = 'text',
}: InputProps): JSX.Element => {
    const [isFocused, setIsFocused] = useState(false);
    const [isShowingPassword, setIsShowingPassword] = useState(false);
    const [iconState, setIconState] = useState({ name: '', class: '' });

    const changeIcon = () => {
        if (errors?.length && type !== 'password') {
            setIconState({
                name: 'icon-warning',
                class: 'icon--error',
            });
        } else if (type === 'email') {
            setIconState({
                name: 'icon-email',
                class: 'icon--email',
            });
        } else if (type === 'password') {
            setIconState({
                name: 'icon-visible',
                class: 'icon--visible',
            });
        }
    };

    useEffect(changeIcon, []);

    return (
        <fieldset
            className={`
                fieldset
                ${isActive && 'active'}
                ${errors?.length && 'active'}
                ${classes ? classes : ''}
            `}
            data-testid="input"
        >
            {label && (
                <label
                    id={id ? `${id}-label` : ''}
                    htmlFor={id ? id : ''}
                    className={isFocused ? 'active' : ''}
                >{ label }</label>
            )}

            <div className="inputWrapper">
                <input
                    id={id ? id : ''}
                    type={isShowingPassword ? 'text' : type}
                    placeholder={placeholder}
                    className={`input${isActive && ' active'}`}
                    autoComplete={autoComplete}
                    required={required}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onInput={(event: React.ChangeEvent<HTMLInputElement>) => handler(event.target.value)}
                />

                {type !== 'password' ? (
                    <Icon
                        name={iconState.name}
                        classes={`icon--md ${iconState.class}`}
                    />
                ) : (
                    <button
                        className="button button--visible"
                        tabIndex={-1}
                        onClick={() => setIsShowingPassword(value => !value)}
                    >
                        <Icon
                            name={iconState.name}
                            classes={`icon--md ${iconState.class}`}
                        />
                    </button>
                )}
            </div>
        </fieldset>
    );
};

export default Input;