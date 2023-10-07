import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'

import {
    ToggleButton,
    ToggleButtonGroup,
} from './styles'

interface ISelectButton {
    onInterfacesCliecked(): void,
    onIdentidadeClicked(): void,
    onClick?(): void
}

const SelectButton: React.FC<ISelectButton> = ({ onInterfacesCliecked = () => { }, onIdentidadeClicked = () => { }, onClick }) => {

    const { t } = useTranslation()
    const [selected, setSelected] = useState('interface')


    function handleClick(value: string) {
        setSelected(value)
        value === 'interface' ? onInterfacesCliecked() : onIdentidadeClicked()
    }


    return (
        <div onClick={onClick}>
            <ToggleButtonGroup
                type="radio"
                value={selected}
                name='lang'
                onChange={handleClick}
                className="mb-2">

                <ToggleButton id='tg-interface' value='interface'>{t('label.interface')}</ToggleButton>
                <ToggleButton id='tg-visual' value='visual'>{t('label.logo_desing')}</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

export default SelectButton