import React from 'react';
import { useTranslation } from 'react-i18next'

import {
    Container,
    MyPhoto,
    MeContainer,
    WebHello,
    Description,
    DescriptionDetail,
    LinkedinButton,
    PhoneHello
} from './styles';


const Photo: React.FC = () => {

    const { t } = useTranslation()

    return (
        <Container>
            <PhoneHello>
                {t('about_me.hello')}<br />
                <small >
                    {t('about_me.my_name')}
                </small>
            </PhoneHello>
            <MyPhoto
                src={require('../../../../assets/images/me.png')}
            />
            <MeContainer>
                <WebHello>
                    {t('about_me.hello') + ","}<br />
                    {t('about_me.my_name') + ""}
                </WebHello>
                <Description>
                    {t('about_me.description1')}
                    <br />
                    <br />
                    {t('about_me.description2')}
                    <br /><br />
                    {t('about_me.description3')}
                    <br /><br />
                    <DescriptionDetail>
                        {t('about_me.description_more')}
                    </DescriptionDetail>
                </Description >
                <LinkedinButton
                    target='_blank'
                    href='https://www.linkedin.com/in/thaisley/'
                >
                    linkedin
                </LinkedinButton>
            </MeContainer >
        </Container >
    )
}

export default Photo;