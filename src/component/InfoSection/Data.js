import one from "../../images/one.svg"
import two from "../../images/two.svg"
import three from "../../images/three.svg"
// import step from "../../images/step.png";

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: `l'atelier numérique`,
    headline: 'Des solutions adaptées à vos besoins',
    description: 'l’Atelier numérique vous propose des solutions de bon sens pour lutter contre la fracture numérique.',
    buttonLabel: 'Découvrez nos services',
    imgStart: false,
    alt: '',
    img: three,
    dark: false,
    primary: false,
    darkText: true,
    flex: true,
    details: false,
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Nos engagements',
    headline: 'Pourquoi nous?',
    description: 'Conscients des impacts environnementaux du numérique et du renouvellement accéléré des matériels informatiques, nous avons créé l’Atelier numérique qui propose des solutions de bon sens pour lutter contre la fracture numérique.',
    buttonLabel: 'More info',
    imgStart: true,
    img: two,
    alt: 'moneysaver',
    dark: true,
    primary: true,
    darkText: false,
    flex: false,
    details: false,
}

export const homeObjThree = {
    id: 'services',
    details: false,
}


export const homeObjFour = {
    id: 'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Contactez-nous',
    headline: 'Nous sommes à votre service',
    description: `contact@atelier.step.eco`,
    buttonLabel: "envoyer nous un message",
    contact: "Tel: 05 55 55 55 55",
    imgStart: false,
    alt: 'photo',
    img: one,
    dark: false,
    primary: false,
    darkText: true,
    flex: false,
    details: true,
    address1: `Technopole Hélioparc,`,
    address2: '2 avenue du président Pierre Angot,',
    cp: '64053 Pau CEDEX',
    copyright: ` l'atelier Numerique -  ${new Date().getFullYear()}`,


}