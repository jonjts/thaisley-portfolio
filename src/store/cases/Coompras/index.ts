import Pt from './Pt'
import { ICaseGroup } from '../interfaces'

const referencias = [
    'https://veja.abril.com.br/economia/procon-encontra-irregularidades-em-dez-supermercados-de-sao-paulo/',
    'https://noticias.reclameaqui.com.br/noticias/preco-da-gondola-ou-o-que-apareceu-registrado-no-caixa-saiba_2800/',
    'https://epocanegocios.globo.com/Tecnologia/noticia/2019/07/fazer-supermercado-pela-internet-e-uma-das-ultimas-barreiras-do-ecommerce-no-brasil-segundo-diretora-do-google.html',
    'https://portalapas.org.br/consumidor-dos-supermercados-ja-chegou-na-era-omni-channel-revela-pesquisa-da-apas/',
    'https://www.spcbrasil.org.br/uploads/st_imprensa/release_compras_por_impulso2.pdf',
    'https://apasshow.com.br/blog/index.php/2018/05/07/pesquisa-mostra-tendencias-e-comportamento-do-consumidor-de-supermercado/'
]

export default {
    'pt-br': { ...Pt, referencias },
    'en': {...Pt, referencias}
} as ICaseGroup