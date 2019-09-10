export default (lang) => {
    let id = 'ru';
    if (window.location.pathname.startsWith('/pl'))
        id = 'pl';
    else if (window.location.pathname.startsWith('/en'))
        id = 'en';
    return lang[id];
};
