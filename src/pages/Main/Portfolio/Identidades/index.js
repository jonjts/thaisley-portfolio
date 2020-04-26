import React, { useState } from 'react';

import { Container } from './styles';

export default () => {

    const [interfaces] = useState([
        {
            img: require('../../../../assets/images/identidades/conforfit.png'),
        },
        {
            img: require('../../../../assets/images/identidades/rim.png'),
        },
        {
            img: require('../../../../assets/images/identidades/advogado.png'),
        },
        {
            img: require('../../../../assets/images/identidades/arquiteto.png'),
        },
        {
            img: require('../../../../assets/images/identidades/maison.png'),
        },
        {
            img: require('../../../../assets/images/identidades/vade.png'),
        },
        {
            img: require('../../../../assets/images/identidades/kids.png'),
        },
        {
            img: require('../../../../assets/images/identidades/video.png'),
        }
    ])

    return (
        <Container>
            {interfaces.map((item, key) =>
                <img src={item.img} alt={`interface-${key}`} key={key} />
            )}
        </Container>
    );
}
