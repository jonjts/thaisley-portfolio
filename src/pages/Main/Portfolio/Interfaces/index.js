import React, { useState } from 'react';

import Item from './Item'

export default () => {

    const [interfaces] = useState([
        {
            title: 'Calculadora IMC - UI e UX',
            subtitle: 'Casal de Desenvolvedores',
            img: require('../../../../assets/images/interfaces/imc.svg'),
            tool: require('../../../../assets/images/interfaces/figma.png'),
            color: '#3BDBB2',
        },
        {
            title: 'SaraPlay - Redesign',
            subtitle: 'Develoti',
            img: require('../../../../assets/images/interfaces/sara.svg'),
            tool: require('../../../../assets/images/interfaces/xd.png'),
            color: '#000'
        },
        {
            title: 'My Pocket - UI & UX',
            subtitle: 'Casal de Desenvolvedores',
            img: require('../../../../assets/images/interfaces/mypocket.svg'),
            tool: require('../../../../assets/images/interfaces/figma.png'),
            color: '#3AB8CD'
        }
    ])

    return (
        <>
            {interfaces.map((item, key) =>
                <Item
                    key={key}
                    title={item.title}
                    subtitle={item.subtitle}
                    img={item.img}
                    tool={item.tool}
                    color={item.color}
                />
            )}
        </>
    );
}
