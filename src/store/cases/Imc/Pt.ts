import { ICase } from '../interfaces'

const pt_br: ICase = {
    title: 'Calculadora IMC',
    description: '2019 . Casal de Desenvolvedores . Design',
    sessions: [
        {
            title: 'Contexto',
            paragraphs: [
                {
                    text: [
                        {
                            value: `A fim de praticar Design de Interface, me dei como desafio realizar desenvolvimento de telas para cáculo de IMC e como um plus, adicionei o recurso de registrar os IMC calculado, a fim de levar o usuário manter o aplicativo instalado para conseguir avaliar seu progresso.`
                        },
                        {
                            value: `Abaixo, segue o design desenvolvido do Aplicativo Calculadora IMC.`
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/imc/1.jpg'),
                            width: 987,
                            height: 417
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/imc/2.jpg'),
                            width: 732,
                            height: 417
                        }
                    ]
                }
            ]
        },
    ]
}

export default pt_br