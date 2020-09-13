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
                            value: `A empresa Growbit possui um projeto com o foco no desenvolvimento Humano e de suas individualidades, chamado Tinbolt. Ele funciona como uma rede social que permite relação entre os mentores e aprendizes. Também possui gamificação, onde os mentores determina missões para seus aprendizes e gera pontos ao ser concluído para ser trocado por alguma recompensa determinada pelo mentor.`
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
                            value: `Mudar o design visual da ferramenta foi a estratégia escolhida para aumentar o engajamento na ferramenta. Além de procurar facilitar o entendimento e a migração do perfil mentor e aprendiz. Também seria acrescentando nessa versão o sistema de troca de pontos.`
                        },
                        {
                            value: `Ao iniciar o uso da aplicação percebi que não era possível identificar como muda de aprendiz para mentor, bem como realizar cadastro em ambos perfis.`
                        },
                        {
                            value: `As missões são definidas por mentores, e um aprendiz pode ser vários mentores, se assim preferir, porém não era possível visualizar esse requisito, ou seja, visualizar missão definida por um mentor específico.`
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
                            value: `Com Análise de todo o fluxo da interface atual e após reuniões com os stakeholders para entender melhor a proposta do aplicativo, foi proposto a esse novo layout.`
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