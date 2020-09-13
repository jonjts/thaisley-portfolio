import { ICase } from '../interfaces'

const pt_br: ICase = {
    title: 'Saraplay',
    description: '2019 . Develoti . Redesign',
    banner: require('../../../assets/images/cases/sara/banner.jpg'),
    sessions: [
        {
            title: 'Contexto',
            paragraphs: [
                {
                    text: [
                        {
                            value: `Saraplay é um aplicativo de streaming religioso, conhecida como a Netflix dos Evangélicos. Mas ela é muito mais que apenas uma "Netflix" pois possui além de vídeos, serviços como: radio fm, música, ebook, podcast, lives. Ou seja, um serviço de streaming bem completo, e foi justamente por isso que surgiu o maior desafio no redesign.`
                        },
                    ]
                }
            ]
        },
        {
            title: 'Desafio',
            paragraphs: [
                {
                    text: [
                        {
                            value: `Primeiramente foi criado um Moodboard com as referências que poderia me auxiliar na contrução e realizado vários wireframe de baixa fidelidade no papel. `
                        },
                    ]
                },
            ],
        },
        {
            title: 'Solução',
            paragraphs: [
                {
                    text: [
                        {
                            value: `Para solucionar o problema do menu extenso, foi criado o Menu "Explore o SaraPlay", como vocês podem ver abaixo. Apresentando todos submenu exigidos e na tela inicial.`
                        },
                    ],
                },
            ]
        },
        {
            title: 'Redesign',
            paragraphs: [
                {
                    text: [
                        {
                            value: `Além da criação do Menu “Explore o SaraPlay”, foi trabalhado também na organização do cadastro que por ser muito extenso foi quebrado em etapas e utilizado o banner principal para anunciar quando está ocorrendo uma transmissão ao vivo.`
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/sara/antes.jpg'),
                            width: 453,
                            height: 472
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/sara/depois.jpg'),
                            width: 455,
                            height: 425
                        }
                    ]
                }
            ]
        }
    ]
}

export default pt_br