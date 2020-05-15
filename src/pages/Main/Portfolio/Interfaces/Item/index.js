import React from 'react';

import { Subtitle } from '../../../styles/index'
import { Container, Description, Img, Tool, ImageItem, ImgPocket } from './styles';

export default ({ title, subtitle, img, tool, color, keyName }) => {
    return (
        <Container background={color}>
            <div style={{ marginBottom: 30 }} >
                <Subtitle className='title' >
                    {title}
                </Subtitle>
                <Description classname='description'>
                    {subtitle}
                </Description>
            </div>
            {
                keyName == 'pocket'
                    ? <ImgPocket alt={title} src={img} />
                    : <Img alt={title} src={img} />
            }
            <ImageItem style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <Tool alt={title} src={tool} className='tool' />
            </ImageItem>
        </Container>
    );
}
