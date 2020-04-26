import React, { useState } from 'react';

import './style.css'

import {
    Button
} from 'reactstrap'

export default ({ onInterfacesCliecked = () => { }, onIdentidadeClicked = () => { } }) => {

    const [selected, setSelected] = useState('interface')
    

    function handleClick(value) {
        setSelected(value)
        value === 'interface' ? onInterfacesCliecked() : onIdentidadeClicked()
    }


    return (
        <div className='select-button-container'>
            <Button
                className={`select-button ${selected === 'interface' ? 'selected-button' : ''}`}
                onClick={() => handleClick('interface')}
                color='default'>
                <div>
                    Interfaces
                </div>
            </Button>
            <Button
                className={`select-button ${selected === 'visual' ? 'selected-button' : ''}`}
                onClick={() => handleClick('visual')}
                color='default'>
                <div>
                    Identidade Visual
                </div>
            </Button>
        </div>
    );
}
