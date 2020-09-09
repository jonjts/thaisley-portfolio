import React from 'react';
import { ICase } from '../../../store/cases/interfaces'

import {
    Container,
    Banner
} from './styles';

const Header: React.FC<{ caso: ICase }> = ({ caso }) => {
    return (
        <Container>
            <h1>
                {
                    caso.title
                }
            </h1>
            <caption>
                {
                    caso.description
                }
            </caption>
            <Banner
                alt='Banner'
                width={678}
                height={238}
                src={caso.banner}
            />
        </Container>
    )
}

export default Header;