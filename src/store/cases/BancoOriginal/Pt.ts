import { ICase } from '../interfaces'

const pt_br: ICase = {
    title: 'Banco original',
    description: '2020 . Ebac . Banco Original . Case Study',
    banner: require('../../../assets/images/cases/banco-original/banner.jpg'),
    sessions: [
        {
            title: 'Contexto',
            paragraphs: [
                {
                    text: [
                        {
                            value: `Como projeto final do Curso de UX Design da Ebac, foi dado um problema real do Banco Original para desenvolver todo fluxo de UX para chegar a uma solução. E o problema escolhido foi: “Como podemos ajudar os nossos clientes a conhecer seu perfil de crédito, melhorar sua nota e organizar as finanças?”.`
                        },
                    ]
                }
            ]
        },
        {
            title: 'Desk Research',
            paragraphs: [
                {
                    text: [
                        {
                            value: `Para entender o problema levantei algumas perguntas para realizar uym Desk Reserch e compreender mais afundo sobre o tema.`
                        },
                        {
                            value: `•   Quais Tipos de Empréstimo?`
                        },
                        {
                            value: `•   Qual maior incidência de solicitação de empréstimo?`
                        },
                        {
                            value: `•  Motivos que leva a negativação do empréstimo?`
                        },
                        {
                            value: `•  Quais informações são necessárias para solicitar um empréstimo?`
                        },
                        {
                            value: `•   O que leva o baixo score?`
                        },
                        {
                            value: `•   Como melhorar a nota no score?`
                        },
                        {
                            value: `•   O que estão fazendo para evitar a inadimplência?`
                        },
                        {
                            value: 'Como resultado da pesquisa, consegui algumas informações:'
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/banco-original/1.jpg'),
                            width: 674,
                            height: 394
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/banco-original/2.jpg'),
                            width: 656,
                            height: 364,
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/banco-original/3.jpg'),
                            width: 671,
                            height: 377
                        },
                    ]
                },
            ],
        },
        {
            title: 'Matriz CSD',
            paragraphs: [
                {
                    text: [
                        {
                            value: `Após estes levantamento criei uma matriz CSD que me guiou para a próxima etapa, a entrevista com os usuários.`
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/banco-original/matriz.jpg'),
                            width: 669,
                            height: 288
                        },
                    ],
                },
            ]
        },
        {
            title: 'Entrevista Qualitativa',
            paragraphs: [
                {
                    title: 'Critério',
                    text: [
                        {
                            value: `Pessoas que solicitaram crédito e tiveram o crédito negativado ou aprovado.`
                        },
                    ]
                },
                {
                    title: 'Quantidade',
                    text: [
                        {
                            value: `3 entrevistas de profundidade`
                        },
                    ]
                },
                {
                    title: 'Perfil das entrevistadas',
                    text: [
                        {
                            value: `•   Mulheres`
                        },
                        {
                            value: `•   Empregadas`
                        },
                        {
                            value: `•  Possui Ensino Superior Completo`
                        },
                        {
                            value: `•  1 das 3 teve crédito negado`
                        },
                        {
                            value: `•  Possuem pouco conhecimento sobre administração de finanças`
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/banco-original/entrevista.jpg'),
                            width: 663,
                            height: 184
                        }
                    ]
                }
            ]
        },
        {
            title: 'Persona',
            paragraphs: [
                {
                    text: [
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/banco-original/persona.jpg'),
                            width: 669,
                            height: 288
                        }
                    ]
                }
            ]
        },
        {
            title: 'Ideação',
            paragraphs: [
                {
                    text: [
                        {
                            value: 'O processo de ideação se deu em duas etapas, a primeira por meio de Brainstorm e a segunda Crazy 8’s com base nas ideias do Brainstorm.'
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/banco-original/ideia.jpg'),
                            width: 669,
                            height: 288
                        }
                    ]
                }
            ]
        },
        {
            title: 'Processo',
            paragraphs: [
                {
                    text: [
                        {
                            value: 'O processo para desenvolvimento do protótipo final começou com etapas, primeiro com criação de wireframe de baixa fidelidade no papel e depois com entendimento sobre a identidade do Banco e realizado Moodboar com as telas do próprio Banco Orginal juntamente com telas do Serasa, dentre outas referências.'
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/banco-original/processo.jpg'),
                            width: 669,
                            height: 288
                        }
                    ]
                }
            ]
        },
        {
            title: 'Solução',
            paragraphs: [
                {
                    text: [
                        {
                            value: 'Como proposta para melhorar o perfil dos usuários para melhor aceitação de crédito, foi proposto um assistente financeiro, que iria possui 4 funcionalidades. Por meio dessas funcionalidades, o usuário entenderiam melhor o motivo da negativação e conseguiria melhorar seu perfil facilitando a aprovação de crédito no fututo. Segue abaixo a telas proposta para o Assistente Financeiro.'
                        },
                    ],
                },
                {
                    title: 'Lembretes de Pagamentos',
                    text: [
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/banco-original/lembrete-pagamento.jpg'),
                            width: 669,
                            height: 462
                        }
                    ]
                },
                {
                    title: 'Acompanhamento do Score',
                    text: [
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/banco-original/score.jpg'),
                            width: 669,
                            height: 612
                        }
                    ]
                },
                {
                    title: 'Saúde Financeira',
                    text: [
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/banco-original/saude-financeira.jpg'),
                            width: 669,
                            height: 612
                        }
                    ]
                },
                {
                    title: 'Dicas de Finanças com vídeos e artigos',
                    text: [
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/banco-original/dicas-videos.jpg'),
                            width: 663,
                            height: 553
                        }
                    ]
                }
            ]
        }
    ]
}

export default pt_br