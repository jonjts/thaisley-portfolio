import React, { useState } from 'react';

import Item from './Item'

export default () => {

    const [interfaces] = useState([
        {
            keyName: 'imc',
            title: 'Calculadora IMC - UI e UX',
            subtitle: 'Casal de Desenvolvedores',
            img: require('../../../../assets/images/interfaces/imc.png'),
            tool: require('../../../../assets/images/interfaces/figma.png'),
            color: '#3BDBB2',
        },
        {
            keyName: 'sara',
            title: 'SaraPlay - Redesign',
            subtitle: 'Develoti',
            img: require('../../../../assets/images/interfaces/sara.png'),
            tool: require('../../../../assets/images/interfaces/xd.png'),
            color: '#000'
        },
        {
            keyName: 'pocket',
            title: 'My Pocket - UI & UX',
            subtitle: 'Casal de Desenvolvedores',
            img: require('../../../../assets/images/interfaces/mypocket.png'),
            tool: require('../../../../assets/images/interfaces/figma.png'),
            color: '#3AB8CD'
        }
    ])

    return (
        <>
            {interfaces.map((item, key) =>
                <Item
                    keyName={item.keyName}
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
