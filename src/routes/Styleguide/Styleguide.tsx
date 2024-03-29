import { useState } from 'react';
import { Link } from 'react-router-dom';
import { stringHelper } from '../../libs/helpers';

import Accordion from '../../components/Accordion/Accordion';
import Checkbox from '../../components/Checkbox/Checkbox';
import Icon from '../../components/Icon/Icon';
import Input from '../../components/Input/Input';
import Radios from '../../components/Radios/Radios';
import Slider from '../../components/Slider/Slider';
import Toggle from '../../components/Toggle/Toggle';

import CheckboxProps from '../../components/Checkbox/Checkbox.types';

export const Styleguide = (): JSX.Element => {
    // State
    const [isToggled, setIsToggled] = useState(false);
    const [sliderValue, setSliderValue] = useState(100);

    const [radios, setRadios] = useState([
        {
            id: 'style-guide-option-1',
            isToggled: true,
            label: 'Option 1',
        },
        {
            id: 'style-guide-option-2',
            isToggled: false,
            label: 'Option 2',
        },
        {
            id: 'style-guide-option-3',
            isToggled: false,
            label: 'Option 3',
        },
    ]);

    const [inputs, setInputs] = useState([
        {
            id: 'style-guide-input-1',
            value: '',
            label: 'Text',
            placeholder: 'Text',
            type: 'text',
        },
        {
            id: 'style-guide-input-2',
            value: '',
            label: 'Email',
            placeholder: 'Email',
            type: 'email',
        },
        {
            id: 'style-guide-input-3',
            value: '',
            label: 'Password',
            placeholder: 'Password',
            type: 'password',
        },
    ]);

    const checkboxHandler = () => { return; };
    const checkboxes: CheckboxProps[] = [
        {
            label: 'Checkbox Option 1',
            handler: checkboxHandler,
        },
        {
            label: 'Checkbox Option 2',
            handler: checkboxHandler,
        },
        {
            label: 'Checkbox Option 3',
            handler: checkboxHandler,
        },
    ];


    // General Settings
    const componentLabels = [
        'accordions',
        'buttons',
        'colors',
        'inputs',
    ];

    // Handlers
    const scrollTo = (target: string) => {
        const element = document.querySelector(`[data-target=${target}]`);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };
    
    const handleRadioChange = (index: number) => {
        const newRadios = [...radios];

        newRadios[index].isToggled = !newRadios[index].isToggled;

        setRadios(newRadios);
    };

    const handleInputChange = () => {
        const newInputs = [...inputs];

        setInputs(newInputs);
    };

    return (
        <main
            className="styleguide container py-4"
            data-testid="styleguide"
        >
            {/* Styleguide Navigation */}
            <aside className="styleguide__sidebar">
                <nav className="styleguide__nav">
                    <ul className="styleguide__nav__list">
                        <li className="styleguide__nav__item">
                            <Link to="/" className="link">
                                Back to home
                            </Link>
                        </li>

                        {componentLabels.map(label => (
                            <li className="styleguide__nav__item" key={label}>
                                <button
                                    className="button button--secondary button--styleguide"
                                    onClick={() => scrollTo(label)}
                                >
                                    { stringHelper.capitalize(label) }
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            <div className="styleguide__content py-4">
                <div className="container tablet:mt-0">
                    <h1>Styleguide</h1>

                    {/* Accordions */}
                    <section data-target="accordions">
                        <h2>Accordions</h2>

                        <div className="grid grid--12/12 tablet:grid--1/2">
                            <div>
                                <Accordion title="Click to expand">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero!
                                </Accordion>
                            </div>

                            <div>
                                <Accordion
                                    title="Click to expand"
                                    iconPosition="right"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero!
                                </Accordion>
                            </div>
                        </div>
                        
                        <div className="grid grid--12/12 tablet:grid--1/2 mt-2">
                            <div>
                                <Accordion
                                    title="Click to expand"
                                    iconType="plus"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero!
                                </Accordion>
                            </div>

                            <div>
                                <Accordion
                                    title="Click to expand"
                                    iconType="plus"
                                    iconPosition="right"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et unde cum totam quisquam, distinctio laudantium dolorum minima vitae consequuntur fugiat, vero harum labore dolorem, velit officiis eos! Qui, libero!
                                </Accordion>
                            </div>
                        </div>
                    </section>
                    
                    {/* Buttons */}
                    <section data-target="buttons">
                        <h2>Buttons</h2>

                        <div>
                            <h3>Primary Buttons</h3>

                            <div className="grid grid--1/2 tablet:grid--1/3 desktop:grid--1/4">
                                <button className="button button--primary">
                                    Click
                                </button>
                            
                                <button className="button button--primary button--icon">
                                    <Icon name="icon-search" />

                                    <span>Click</span>
                                </button>
                            
                                <button className="button button--primary button--icon">
                                    <span>Click</span>

                                    <Icon name="icon-search" />
                                </button>
                            
                                <button className="button button--primary button--flat">
                                    Click
                                </button>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3>Primary Buttons (Outlined)</h3>

                            <div className="grid grid--1/2 tablet:grid--1/3 desktop:grid--1/4">
                                <button className="button button--primary button--outline">
                                    Click
                                </button>
                            
                                <button className="button button--primary button--outline button--icon">
                                    <Icon name="icon-search" />

                                    <span>Click</span>
                                </button>
                            
                                <button className="button button--primary button--outline button--icon">
                                    <span>Click</span>

                                    <Icon name="icon-search" />
                                </button>
                            
                                <button className="button button--primary button--outline button--flat">
                                    Click
                                </button>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3>Miscellaneous Buttons</h3>

                            <Toggle
                                label="Toggle Me"
                                isChecked={isToggled}
                                handler={() => setIsToggled(value => !value)}
                            />
                        </div>
                    </section>
                            
                    {/* Colors */}
                    <section data-target="colors">
                        <h2>Colors</h2>

                        <div>
                            <h3>Default Colors</h3>

                            <div className="grid grid--12/12 tablet:grid--1/2 desktop:grid--1/3">
                                <div className="styleguide__color styleguide__color--invert bg-0">
                                    <span>White</span>

                                    <span>Variable Name: <strong>color-0</strong></span>

                                    <span>Hexcode: <strong>#FFFFFF</strong></span>
                                </div>
                                
                                <div className="styleguide__color bg-1">
                                    <span>Black</span>

                                    <span>Variable Name: <strong>color-1</strong></span>

                                    <span>Hexcode: <strong>#000000</strong></span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3>Primary Pallette</h3>

                            <div className="grid grid--12/12 tablet:grid--1/2 desktop:grid--1/3">
                                <div className="styleguide__color bg-2">
                                    <span>Astronaut</span>

                                    <span>Variable Name: <strong>color-2</strong></span>

                                    <span>Hexcode: <strong>#224e72</strong></span>
                                </div>
                            </div>
                        </div>
                    </section>
                
                    {/* Inputs */}
                    <section data-target="inputs">
                        <h2>Inputs</h2>

                        <div>
                            <h4>Checkboxes</h4>

                            <div className="flex flex-column">
                                {checkboxes.map(({ handler, label }, index) => (
                                    <Checkbox
                                        key={label}
                                        label={label}
                                        handler={handler}
                                        classes={index ? 'mt-2' : ''}
                                    />
                                ))}
                            </div>
                        </div>
                        
                        <div className="mt-4">
                            <h4>Radios</h4>

                            <Radios
                                radios={radios}
                                handler={(index) => handleRadioChange(index)}
                                groupName="styleguide-radios"
                            />
                        </div>

                        <div className="mt-4">
                            <h4>Slider</h4>

                            <Slider
                                value={sliderValue}
                                min={0}
                                max={100}
                                step={1}
                                handler={value => setSliderValue(value)}
                            />
                        </div>

                        <div className="mt-4">
                            <h4>Text Boxes</h4>

                            {inputs.map(input => (
                                <Input
                                    key={input.id}
                                    id={input.id}
                                    v-model="inputs.text"
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    label={input.label}
                                    handler={handleInputChange}
                                    classes="mt-2"
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Styleguide;