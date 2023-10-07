import React from 'react';
import moment from 'moment'
import 'moment/locale/pt-br';
import { useTranslation } from 'react-i18next'
import { ICase } from "../../store/cases/interfaces";

import { Container } from './styles';
import Header from "./Header";
import Session from './Session'
import Referencias from "./Referencias";

interface IArticle {
    caso: ICase,
    children: React.ReactNode
}

const Article: React.FC<IArticle> = ({ caso, children }) => {

    const { i18n } = useTranslation()

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
            {
                caso.referencias &&
                <Referencias referencias={caso?.referencias} />
            }
            <label className='date'>
                {
                    caso?.date &&
                    moment(caso.date).locale(i18n.language).format('MMMM YYYY')
                }
            </label>
        </Container>
    )
}

export default Article;