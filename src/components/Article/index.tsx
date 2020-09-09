import React from 'react';
import { ICase } from "../../store/cases/interfaces";

import { Container } from './styles';
import Header from "./Header";
import Session from './Session'

interface IArticle {
    caso: ICase
}

const Article: React.FC<IArticle> = ({ caso, children }) => {
    return (
        <Container>
            {
                children
            }
            <Header caso={caso} />
            {
                caso.sessions.map((item, key) => (
                    <Session key={key} session={item} />
                ))
            }
        </Container>
    )
}

export default Article;