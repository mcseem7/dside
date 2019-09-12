export const getLang = () => {
    let id = 'ru';
    if (window.location.pathname.startsWith('/pl'))
        id = 'pl';
    else if (window.location.pathname.startsWith('/en'))
        id = 'en';
    return id;
};
export default (langOrRu, en = langOrRu, pl = en) => {
    const lang = typeof langOrRu === 'string' ? { ru: langOrRu, en, pl } : langOrRu;
    let id = getLang();
    return lang[id];
};
