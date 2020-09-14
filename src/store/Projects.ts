export interface IProject {
    image: string,
    categoria: string,
    title: string,
    id: string,
    ordem: number
}

function compareTo(a: IProject, b: IProject) {
    if (a.ordem > b.ordem) {
        return 1;
    }
    if (a.ordem < b.ordem) {
        return -1;
    }
    // a must be equal to b
    return 0;
}

export const interfaces: Array<IProject> = [
    {
        image: require('../assets/images/interfaces/coompras.jpg'),
        categoria: 'categoria.ux_ui_design',
        title: 'Coompras',
        id: 'coompras',
        ordem: 1
    },
    {
        image: require('../assets/images/interfaces/dr-ana.jpg'),
        categoria: 'categoria.visual_design',
        title: 'Dra Ana Emília',
        id: 'dr-ana',
        ordem: 2
    },
    {
        image: require('../assets/images/interfaces/tinbolt.jpg'),
        categoria: 'categoria.redesign',
        title: 'Tinbolt',
        id: 'tinbolt',
        ordem: 4
    },
    {
        image: require('../assets/images/interfaces/banco-original.jpg'),
        categoria: 'categoria.case_study',
        title: 'Banco Orginal',
        id: 'banco-original',
        ordem: 3
    },
    {
        image: require('../assets/images/interfaces/sara.jpg'),
        categoria: 'categoria.redesign',
        title: 'SaraPlay',
        id: 'sara-play',
        ordem: 6
    },
    {
        image: require('../assets/images/interfaces/imc.jpg'),
        categoria: 'categoria.visual_design',
        title: 'IMC Calculadora',
        id: 'imc-calculadora',
        ordem: 5
    },
].sort(compareTo)

export const logos: Array<IProject> = [
    {
        image: require('../assets/images/identidades/rim.png'),
        categoria: 'categoria.nutricionista',
        title: 'Claúdia Ribeiro',
        id: 'ribeiro',
        ordem: 1
    },
    {
        image: require('../assets/images/identidades/maison.png'),
        categoria: 'categoria.beleza',
        title: 'Maison',
        id: 'maison',
        ordem: 2
    },
    {
        image: require('../assets/images/identidades/vade.png'),
        categoria: 'categoria.direito',
        title: 'Vade',
        id: 'vade',
        ordem: 3
    },
    {
        image: require('../assets/images/identidades/kids.png'),
        categoria: 'categoria.loja_infantil',
        title: 'Aquarela Kids',
        id: 'kids',
        ordem: 4,
    },
    {
        image: require('../assets/images/identidades/arquiteto.png'),
        categoria: 'categoria.arquitetura',
        title: 'Rebeka Barros',
        id: 'barros',
        ordem: 5,
    },
    {
        image: require('../assets/images/identidades/conforfit.png'),
        categoria: 'categoria.app_sporte',
        title: 'Conforfit',
        id: 'conforfit',
        ordem: 6,
    },
].sort(compareTo)

