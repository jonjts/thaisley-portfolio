import React from 'react';

import { Subtitle } from '../../../styles/index'
import { Container, Description, Img, Tool, ImageItem } from './styles';

export default ({ title, subtitle, img, tool, color }) => {
    return (
        <Container background={color}>
            <div style={{marginBottom: 30}} >
                <Subtitle className='title' >
                    {title}
                </Subtitle>
                <Description classname='description'>
                    {subtitle}
                </Description>
            </div>
            <Img alt={title} src={img} className='img' />
            <ImageItem style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <Tool alt={title} src={tool} className='tool' />
            </ImageItem>
        </Container>
    );
}
