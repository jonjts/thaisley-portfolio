import Pt from './Pt'
import { ICaseGroup } from '../interfaces'


const referencias = [
    'https://blog.asaas.com/motivos-de-inadimplencia/',
    'https://www.spcbrasil.org.br/wpimprensa/wp-content/uploads/2018/08/analise_perfil_inadimplente_2018.pdf',
]

export default {
    'pt-br': { ...Pt, referencias },
    'en': {...Pt, referencias}
} as ICaseGroup