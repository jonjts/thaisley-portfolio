import React, { useState, useEffect } from 'react';

import {
    Card,
    TextContainer,
    Sinnher
} from './styles';
import { S1, Caption } from "../../../pages/styles";

interface IImage {
    imageSorce: string,
    categoria: string,
    title: string,
    onClick?(): void
}

const Image: React.FC<IImage> = ({ imageSorce, categoria, title, onClick }) => {

    const [loading, setLoading] = useState(true)


    function onImageLoaded() {
        setLoading(false)
    }

    return (
        <Card
            opacity={!!onClick ? 0.7 : 1}
            cursor={!!onClick ? 'pointer' : 'default'}
            onClick={onClick}
        >
            <Sinnher className={loading ? 'card-img-top loading' : 'invisible'} />
            <Card.Img
                className={loading ? 'gonne' : ''}
                onLoad={onImageLoaded}
                variant="top"
                src={imageSorce}
            />
            <TextContainer>
                <Caption
                    className={loading ? 'loading' : ''}
                    style={{ width: loading ? 140 : undefined }}
                >
                    {categoria}
                </Caption>
                <S1
                    className={loading ? 'loading' : ''}
                    style={{ width: loading ? 230 : undefined }}
                >
                    {title}
                </S1>
            </TextContainer>

        </Card>
    )
}

export default Image;