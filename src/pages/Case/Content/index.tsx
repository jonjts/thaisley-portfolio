import React from 'react';
import { useTranslation } from 'react-i18next'
import { Coompras } from '../../../store/cases'
import { ICaseGroup, ICase } from '../../../store/cases/interfaces'
import {
    useHistory,
    useParams,
} from "react-router-dom";

import Article from "../../../components/Article";
import {
    Container
} from "react-bootstrap";
import {
    BackButton,
    ContenContainer
} from "./styles";

interface MyCases {
    coompras: ICaseGroup
}

const cases: MyCases = {
    coompras: Coompras
}


const Content: React.FC = () => {

    const history = useHistory()
    const { key } = useParams()
    const { t, i18n } = useTranslation()

    function handleGoBack(e: React.MouseEvent) {
        history.goBack()
    }

    return (
        <Container>
            <ContenContainer>
                <Article
                    //@ts-ignore
                    caso={cases[key][i18n.language === 'en' ? 'en' : 'pt-br'] as ICase}
                >
                    <BackButton
                        onClick={handleGoBack}
                    >
                        <img
                            alt='back'
                            src={require('../../../assets/images/icons/arrow-back.svg')}
                        />
                        <label>
                            {t('cases.back')}
                        </label>
                    </BackButton>
                </Article>
            </ContenContainer>
        </Container>
    )
}

export default Content;
