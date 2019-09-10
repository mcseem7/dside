import {Lang} from '../components/DynamicContent/Pricing/config'

export default (lang: Lang) => {
    let id: keyof Lang = 'ru'
    if(window.location.pathname.startsWith('/pl'))
        id = 'pl'
    else if(window.location.pathname.startsWith('/en'))
        id ='en'

    return lang[id]
}
