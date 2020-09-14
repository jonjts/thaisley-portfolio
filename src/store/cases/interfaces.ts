export interface Text {
    type?: 'text' | 'image' | 'link',
    value: string,
    width?: number,
    height?: number
}

export interface IParagraph {
    title?: string,
    text: Array<Text>
}

export interface ISession {
    title: string,
    paragraphs: Array<IParagraph>
}

export interface ICase {
    title: string,
    description: string,
    banner?: string,
    sessions: Array<ISession>,
    referencias?: Array<string>,
    date?: Date
}


export interface ICaseGroup {
    'pt-br': ICase,
    en: ICase
}

export enum Lang { 'pt-br', 'en' }