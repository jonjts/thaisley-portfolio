import { ICase } from '../interfaces'

const pt_br: ICase = {
    title: 'Tinbolt',
    description: '2019 . Growbit . Redesign',
    banner: require('../../../assets/images/cases/tinbolt/banner.jpg'),
    sessions: [
        {
            title: 'Contexto',
            paragraphs: [
                {
                    text: [
                        {
                            value: `A empresa Growbit possui um projeto com o foco no desenvolvimento Humano e de suas individualidades, chamado Tinbolt. Ele funciona como uma rede social que permite a relação entre os mentores e aprendizes. Também possui gamificação, onde os mentores determina missões para seus aprendizes, que ao serem concluídas, geram pontos para serem trocados por alguma recompensa determinada pelo mentor. `
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
                            value: `Mudar o design visual da ferramenta foi a estratégia escolhida para aumentar o engajamento do mesmo. E nessa versão o sistema de troca de pontos será adicionado.`
                        },
                        {
                            value: `Um dos problemas encontrados foi ao iniciar o uso da aplicação, percebi que não era possível identificar a mudança do perfil aprendiz para o perfil mentor, bem como realizar cadastro em ambos perfis.`
                        },
                        {
                            value: `As missões são definidas por mentores, e um aprendiz pode ter vários mentores, se assim preferir, porém não era possível visualizar esse requisito, ou seja, visualizar missão definida por um mentor específico.`
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/tinbolt/antes.jpg'),
                            width: 704,
                            height: 289
                        }
                    ]
                },
            ],
        },
        {
            title: 'Redesign',
            paragraphs: [
                {
                    text: [
                        {
                            value: `Com Análise de todo o fluxo da interface atual e após reuniões com os stakeholders para entender melhor a proposta do aplicativo, foi proposto esse novo layout.`
                        },
                        {
                            value: `Agora sendo possível migrar de um perfil de mentor para aprendiz, além do novo sistema de notificações e troca de pontos implementado.`
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/tinbolt/depois.jpg'),
                            width: 767,
                            height: 550
                        }
                    ],
                },
            ]
        },

    ]
}

export default pt_br