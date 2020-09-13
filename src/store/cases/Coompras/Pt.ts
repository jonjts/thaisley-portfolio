import { ICase } from '../interfaces'

const pt_br: ICase = {
    date: new Date('2020-06-01'),
    title: 'Coompras',
    description: '2020 . Casal de Desenvolvedores . UI/UX Design',
    banner: require('../../../assets/images/cases/coompras/banner.jpg'),
    sessions: [
        {
            title: 'Contexto',
            paragraphs: [
                {
                    text: [
                        {
                            value: `A empresa Growbit possui um projeto com o foco no desenvolvimento Humano e de suas individualidades, chamado Tinbolt. Ele funciona como uma rede social que permite a relação entre os mentores e aprendizes. Também possui gamificação, onde os mentores determina missões para seus aprendizes e gera pontos ao ser concluído para ser trocado por alguma recompensa determinada pelo mentor. `
                        },
                        {
                            value: `De acordo com dicas do Site Reclame Aqui fica inviável para o consumidor evitar de ser lesionado por não ser uma dica muito prática, e poderia apenas servir para pequenas compras: “Se sua compra não for grande, então tente decorar o valor dos produtos que está levando (ou uma média). Se algum sair muito do que você lembra, questione.”`
                        },
                        {
                            value: `Facilitar a vida do consumidor ao realizar compras com uma maneira que seja prática, rápida e que facilite os cálculos, proporcionará menos prejuízo financeiros acometidos por essas infrações, e ajudaria nas compras de toda a família ou o grupo que estivessem envolvidos.`
                        }
                    ]
                }
            ]
        },
        {
            title: 'Desk Research',
            paragraphs: [
                {
                    title: 'Internet, tecnologia e Supermercado',
                    text: [
                        {
                            value: `De acordo com pesquisa realizada pela Associação Paulista de Supermercados (APAS) e do Ibope mostra que 85% dos brasileiros fazem compras em supermercado de forma tradicional, ou seja, apenas 15% utilizam a forma online de fazer compras de supermercado. Apesar desses números, há uma grande expectativa que isso mude, mas de acordo com Gleidys Salvanha, diretora de Negócios para Varejo do Google, o crescimento das vendas online de supermercados está longe de significar o fim das lojas físicas. Portanto, continua sendo bastante significativo facilitar a vida dos consumidores.`
                        },
                        {
                            value: `Outro ponto observado nesta pesquisa é que não é falta de tempo que leva os consumidores a optar pelo sistema de compra online, pois apenas 23% apontam isso como motivação. Mas segundo Ronaldo dos Santos, presidente da APAS. “A maior variedade de produtos liderou as respostas, com 68%, seguida da percepção de que os preços online são mais em conta (67%)”, completa o presidente. O estudo mostra também que a facilidade de comparação de preços foi citada por 57% e a percepção de sempre encontrar o que procura por 49%.`
                        },
                        {
                            value: `O levantamento também ouviu os supermercadistas, que foram questionados sobre o que consideram importante para o futuro dos supermercados no país e 58% dos empresários do setor brasileiro considera como muito importante a melhoria da experiência de compra do consumidor (58%). E 18% (podendo a chegar a 31% entre as grandes redes) dos supermercadistas apostam em adoção de inovações tecnológicas, como adoção de aplicativos e instalação de chips em todos os produtos.`
                        }
                    ]
                },
                {
                    title: 'Compras feitas por impulso',
                    text: [
                        {
                            value: `Uma pesquisa conduzida pelo Serviço de Proteção ao Crédito (SPC Brasil) e pela Confederação Nacional de Dirigentes Lojistas (CNDL) mostra que 33,2% das compras feitas por impulso e sem planejamento acontecem no supermercado.`
                        },
                        {
                            value: `Considerando apenas as cinco últimas compras de supermercado, 43% foram feitas por impulso, sendo que o índice é maior entre as mulheres (46,4%), as pessoas mais jovens (51,2%) e os pertencentes às classes C, D e E (44,6%).`
                        },
                    ]
                },
                {
                    title: 'Frequência',
                    text: [
                        {
                            value: `Embora a compra do mês ainda seja relevante, em média, os brasileiros vão aos supermercados quatro vezes ao mês e pelo menos 33% deles uma vez por semana. O percentual é maior (44%) entre os integrantes das classes AB e abaixo da média (23%) para os membros das classes DE, por se tratar de processos distintos de compra.`
                        }
                    ]
                }, {
                    title: 'Atividade Compartilhada',
                    text: [
                        {
                            value: `O levantamento aponta que a visita ao supermercado é uma atividade compartilhada para 59% dos respondentes. Entre eles, 28% vão com os filhos e 57% são acompanhados pelo cônjuge durante as compras. Esse percentual aumenta para 61% entre os integrantes da classe C, sendo ainda maior entre os casais na faixa entre 35 e 44 anos – 66% deles vão ao supermercado ao lado dos parceiros.`
                        }
                    ]
                },
                {
                    title: 'Comparativo entre homens e mulheres',
                    text: [
                        {
                            value: `O público masculino privilegia em suas escolhas fatores que dão mais agilidade ao processo de compra, já as mulheres são mais observadoras e levam em conta atributos como qualidade dos produtos, limpeza e ofertas atrativas.`
                        }
                    ]
                },
                {
                    title: 'Pesquisa de Preço',
                    text: [
                        {
                            value: 'Com a crise, a pesquisa de preços ganhou ainda mais importância no processo de compra. A maioria (69%) dos entrevistados declara que analisa os valores dos produtos e entre as mulheres esse hábito atinge 74% delas. A pesquisa de preços dentro do supermercado é realizada por 58% dos consumidores, enquanto a consulta em tabloides publicados em jornais é feita por 50%. A pesquisa on-line é ainda incipiente entre os consumidores e apenas 12% deles declaram praticá-la, sendo mais comum entre jovens (20%) e da classe AB (23%).'
                        }
                    ]
                },
            ],
        },
        {
            title: 'Pesquisa Quantitativa',
            paragraphs: [
                {
                    text: [
                        {
                            value: 'Para conectar os dados adquiridos no Desk Reserach, fiz uma pesquisa no Google Forms que coloquei em grupos de WhatsApp rodando durante 1 semana, e durante esse tempo foi coletado 68 respostas.'
                        },
                        {
                            value: 'Abaixo segue alguns resultados encontrados:'
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/coompras/charts-pesquisa.jpg'),
                            width: 661,
                            height: 1764
                        }
                    ]
                }
            ]
        },
        {
            title: 'Extrevista de Profundidade',
            paragraphs: [
                {
                    text: [
                        {
                            value: `Foram realizadas entrevistas por chamadas de voz com 5 pessoas para compreender o contexto com o qual eles agiam na realização de compras em Supermercados.`
                        }
                    ],
                },
                {
                    title: `Script`,
                    text: [
                        {
                            value: `1. Realizou alguma compra no supermercado nos últimos dias?`
                        },
                        {
                            value: `2. Essa última compra foi uma compra rápida? Ou foi compras em grandes quantidades?`
                        },
                        {
                            value: `3. Antes de ir ao supermercado, você fez algum preparo? Tipo, realizou alguma pesquisa? Fez alguma anotação?`
                        },
                        {
                            value: `4. Como você decide qual supermercado ir? Qual seu critério de busca?`
                        },
                        {
                            value: `5. E quando você chega no supermercado, como é sua jornada? Qual a primeira coisa que você faz? E as coisas seguintes?`
                        },
                        {
                            value: `6. Quando você decide colocar um produto no carrinho, qual critério que você observa e que te leva a colocar aquele produto no carrinho?`
                        },
                        {
                            value: `7. Você delimita algum valor de gasto?`
                        },
                        {
                            value: `8. Se sim, como você controla o valor que você determinou e as compras do carrinho? Qual seu método?`
                        },
                        {
                            value: `9. Você teve algum problema ou obstáculo para realizar a última compra sua em supermercado?`
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/coompras/resultado-pesquisa.jpg'),
                            width: 678,
                            height: 418
                        }
                    ]
                }
            ]
        },
        {
            title: `Criação da Persona`,
            paragraphs: [
                {
                    text: [
                        {
                            value: `Com base na entrevista do usuário e pesquisas realizadas foi desenvolvido a Persona, Jornada do Usuário e Mapa de Empatia.`
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/coompras/persona.jpg'),
                            width: 444,
                            height: 438,
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/coompras/mapa.jpg'),
                            width: 444,
                            height: 447,
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/coompras/jornada.jpg'),
                            width: 678,
                            height: 397
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
                            value: `Depois de compreender as rotinas dos usuários foi realizado um Grid de Priorização com base nos insights coletados, a fim de chegar a uma solução mais tangível a curto prazo para os usuários. Para criação do Aplicativo foi utilizado ferramentas como auxílio, como a Crazy 8 e Brainstorm.`
                        },
                    ]
                }, {
                    title: `Wireframe`,
                    text: [
                        {
                            value: `O Wireframe consiste na criação de pré-lista compartilhada com alguém no qual divide a atividade de compras de supermercado. Além de compartilhar a pré-lista também será compartulhada as compras em andamento.`
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/coompras/wireframe.jpg'),
                            width: 676,
                            height: 411
                        }
                    ]
                }, {
                    title: 'Teste de Usabilidade',
                    text: [
                        {
                            value: `No primeiro teste de usabilidade real, com idas ao supermercado, foi observado algun aspectos que precisaram ser revisados: 1º - O Agrupamento dos itens comprados e Pendentes não se fazia necessário, pois o usuário não clicava e raramento olhava a lista dos comprados; 2º - Ao iniciar as compras algumas pessoas estão em locais diferentes no momento, e não era possível abrir mais de um carrinho de compras; 3º - Animação de marca cada produto como comprado estava longa e não era prática quando o usuário precisava marcar muitos itens.`
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/coompras/pre-lista.jpg'),
                            width: 123,
                            height: 254
                        }
                    ]
                }
            ]
        },
        {
            title: 'Design “Final”',
            paragraphs: [
                {
                    text: [
                        {
                            value: `Na imagem a segui é possível observar as telas do aplicativo com o visual design aplicado. Sendo apresentado nas primeiras imagens o splash, carrossel com breve explicação e o login. Logo abaixo no centro pode-se obervar a pré-lista com ajustes após o primeiro teste de usabiliade, no qual agora o usuário pode pegar o seu carrinho e outros podem participar daquelas compras ou pode optar por pegar seu próprio carrinho, também foi colocado em ordem contrária a lista de pendentes e compradas e de forma corrida, sem contração e expansão. Também foi criado uma tela de adicionar o produto rápido após clicar em mais, caso o usuário deseja adcionar mais detalhes, poderá expandir a tela. Na tela “Em compras” o usuário poderá ver o que tem na pré-lista facilmente e é apresentado os itens do carrinho, valor total dele, localização, quantiade de itens e pessoas que estão colaborando com aquelas compras e no caso de adição de produto seria aberto a câmera do celular para leitura do código de barras, tento que o usuário adicionar apenas informação de preço, caso o produto esteja no banco de dados. Após finalizar as compras é apresentado um modal com um breve resumo e todo registro é migrado para as Listas Salvas, para consulta posterior dos usuários`
                        },
                        {
                            type: 'image',
                            value: require('../../../assets/images/cases/coompras/telas-finais.jpg'),
                            width: 678,
                            height: 1024
                        },
                        {
                            value: `Foi colocado “Final” entre aspas no título, pois não necessariamente este será o design definitivo (se ele existe), pois iremos continuar realizando teste e validando com o usuário a usabilidade do aplicativo e progredir ainda mais com ele. O foco sempre será o usuário.`
                        }
                    ]
                }
            ]
        }
    ]
}

export default pt_br