import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'

import {
    ToggleButton,
    ToggleButtonGroup,
} from './styles'

interface ISelectButton {
    onInterfacesCliecked(): void,
    onIdentidadeClicked(): void
}

const SelectButton: React.FC<ISelectButton> = ({ onInterfacesCliecked = () => { }, onIdentidadeClicked = () => { } }) => {

    const { t } = useTranslation()
    const [selected, setSelected] = useState('interface')


    function handleClick(value: string) {
        setSelected(value)
        value === 'interface' ? onInterfacesCliecked() : onIdentidadeClicked()
    }


    return (
            <ToggleButtonGroup
                type="radio"
                value={selected}
                name='lang'
                onChange={handleClick}
                className="mb-2">

                <ToggleButton value='interface'>{t('label.interface')}</ToggleButton>
                <ToggleButton value='visual'>{t('label.logo_desing')}</ToggleButton>
            </ToggleButtonGroup>
    );
}

export default SelectButton