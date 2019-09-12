import {Lang} from '../components/DynamicContent/Pricing/config'

export const getLang = () => {
    let id: keyof Lang = 'ru'
    if(window.location.pathname.startsWith('/pl'))
        id = 'pl'
    else if(window.location.pathname.startsWith('/en'))
        id ='en'

    return id
}

export default (
    langOrRu: Lang | string,
    en: string = langOrRu as any as string,
    pl: string = en): string => {
    const lang: Lang = typeof langOrRu === 'string' ? {ru: langOrRu, en, pl} : langOrRu

    let id: keyof Lang = getLang()

    return lang[id]
}
