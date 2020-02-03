export function createMarkup(value) { return { __html: value }; }
;
export const useDiscount = (discount, amount) => Math.ceil(amount / 1000 * (1000 - discount * 10));
export const normalizePrice = (value) => Math.ceil(value * 100) / 100;
export const getProductInfo = (config) => {
    const getService = (product) => config.services[product.serviceIndex];
    const getPack = (product) => getService(product).packs[product.packIndex];
    const getBasePrice = (product, discount = 0) => useDiscount(discount, getPack(product).price) + getPack(product).modulePrice * (product.extraModules || 0);
    const getText = (product) => {
        return getService(product).name.ru + ' ' + getPack(product).name.ru + ' extra modules ' + product.extraModules;
    };
    return {
        getPack,
        getService,
        getBasePrice,
        getText
    };
};
export const service1 = {
    serviceIndex: 0,
    name: {
        ru: "Логотип",
        en: "Logotype",
        pl: "Logotyp",
    },
    moduleLang: {
        ru: 'Эскизы',
        en: 'Sketches',
        pl: 'Szkice'
    },
    description: {
        ru: 'Визуально отличает Вас от Ваших конкурентов.',
        en: 'Visually distinguishes you from your competitors.',
        pl: 'Wizualnie wyróżnia Cię na tle konkurencji.',
    },
    partnership: false,
    addonIndicies: [1, 2],
    addonDiscounts: {
        1: 20,
    },
    packs: [
        {
            name: {
                ru: "Lite",
                en: "Lite",
                pl: "Lite",
            },
            price: 399,
            modules: 3,
            modulePrice: 69,
            featureDescriptions: {
                ru: '<li class="pricing-feature">3 эскиза</li>\n' +
                    '<li class="pricing-feature">Векторный файл</li>',
                en: '<li class="pricing-feature">3 sketches</li>\n' +
                    '<li class="pricing-feature">Vector file</li>',
                pl: '<li class="pricing-feature">3 skiców</li>\n' +
                    '<li class="pricing-feature">Plik wektorowy</li>',
            }
        },
        {
            name: {
                ru: "Standard",
                en: "Standard",
                pl: "Standard",
            },
            price: 499,
            modules: 4,
            modulePrice: 49,
            featureDescriptions: {
                ru: '<li class="pricing-feature">5 эскизов</li>\n' +
                    '<li class="pricing-feature">Объяснение идеи</li>\n' +
                    '<li class="pricing-feature">Векторный файл</li>',
                en: '<li class="pricing-feature">5 sketches</li>\n' +
                    '<li class="pricing-feature">Explanation of the idea</li>\n' +
                    '<li class="pricing-feature">Vector file</li>',
                pl: '<li class="pricing-feature">5 szkiców</li>\n' +
                    '<li class="pricing-feature">Wyjaśnienie pomysłu</li>\n' +
                    '<li class="pricing-feature">Plik wektorowy</li>',
            }
        },
        {
            name: {
                ru: "Business",
                en: "Business",
                pl: "Business",
            },
            price: 599,
            modules: 5,
            modulePrice: 39,
            featureDescriptions: {
                ru: '<li class="pricing-feature">10 эскизов</li>\n' +
                    '<li class="pricing-feature">Фирменный стиль</li>\n' +
                    '<li class="pricing-feature">Презентация проекта</li>\n' +
                    '<li class="pricing-feature">Объяснение идеи</li>\n' +
                    '<li class="pricing-feature">Брендбук на 3 проявления</li>\n' +
                    '<li class="pricing-feature">Векторный файл</li>',
                en: '<li class="pricing-feature">10 sketches</li>\n' +
                    '<li class="pricing-feature">Corporate identity</li>\n' +
                    '<li class="pricing-feature">Project presentation</li>\n' +
                    '<li class="pricing-feature">Explanation of the idea</li>\n' +
                    '<li class="pricing-feature">Brandbook (3 items)</li>\n' +
                    '<li class="pricing-feature">Vector file</li>',
                pl: '<li class="pricing-feature">10 szkiców</li>\n' +
                    '<li class="pricing-feature">Tożsamość korporatywna</li>\n' +
                    '<li class="pricing-feature">Prezentacja projektu</li>\n' +
                    '<li class="pricing-feature">Wyjaśnienie pomysłu</li>\n' +
                    '<li class="pricing-feature">Książka marki (3 pozycji)</li>\n' +
                    '<li class="pricing-feature">Plik wektorowy</li>',
            }
        },
        {
            name: {
                ru: "Elite",
                en: "Elite",
                pl: "Elite",
            },
            price: 799,
            modules: 6,
            modulePrice: 29,
            featureDescriptions: {
                ru: '<li class="pricing-feature">25 эскизов</li>\n' +
                    '<li class="pricing-feature">Фирменный стиль</li>\n' +
                    '<li class="pricing-feature">Презентация проекта</li>\n' +
                    '<li class="pricing-feature">Объяснение идеи</li>\n' +
                    '<li class="pricing-feature">Брендбук на 3 проявления</li>\n' +
                    '<li class="pricing-feature">Векторный файл</li>',
                en: '<li class="pricing-feature">25 sketches</li>\n' +
                    '<li class="pricing-feature">Corporate identity</li>\n' +
                    '<li class="pricing-feature">Project presentation</li>\n' +
                    '<li class="pricing-feature">Explanation of the idea</li>\n' +
                    '<li class="pricing-feature">Brandbook (10 items)</li>\n' +
                    '<li class="pricing-feature">Vector file</li>',
                pl: '<li class="pricing-feature">25 szkiców</li>\n' +
                    '<li class="pricing-feature">Tożsamość korporatywna</li>\n' +
                    '<li class="pricing-feature">Prezentacja projektu</li>\n' +
                    '<li class="pricing-feature">Wyjaśnienie pomysłu</li>\n' +
                    '<li class="pricing-feature">Książka marki (10 pozycji)</li>\n' +
                    '<li class="pricing-feature">Plik wektorowy</li>',
            }
        }
    ]
};
export const service2 = {
    serviceIndex: 1,
    name: {
        ru: "Лендинг",
        en: "Landing",
        pl: "Landing",
    },
    moduleLang: {
        ru: 'Модули',
        en: 'Modules',
        pl: 'Moduły'
    },
    description: {
        ru: 'Идеален для продажи одной услуги или продукта.',
        en: 'Best for selling a specific service or product.',
        pl: 'Idealny do sprzedaży jednej usługi lub produktu.',
    },
    addonIndicies: [0],
    addonDiscounts: {
        0: 30,
    },
    packs: [
        {
            name: {
                ru: "Lite",
                en: "Lite",
                pl: "Lite",
            },
            price: 599,
            modules: 3,
            modulePrice: 69,
            featureDescriptions: {
                ru: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $99</li>',
                en: '<li class="pricing-feature">3 modules</li>\n' +
                    '<li class="pricing-feature">Template design</li>\n' +
                    '<li class="pricing-feature">Orders to e-mail</li>\n' +
                    '<li class="pricing-feature">Customer texts</li>\n' +
                    '<li class="pricing-feature">Additional module $99</li>',
                pl: '<li class="pricing-feature">3 moduły</li>\n' +
                    '<li class="pricing-feature">Layout szablonowy</li>\n' +
                    '<li class="pricing-feature">Zamówienia przez email</li>\n' +
                    '<li class="pricing-feature">Teksty od klienta</li>\n' +
                    '<li class="pricing-feature">Moduł dodatkowy $99</li>',
            }
        },
        {
            name: {
                ru: "Standard",
                en: "Standard",
                pl: "Standard",
            },
            price: 699,
            modules: 4,
            modulePrice: 49,
            featureDescriptions: {
                ru: '<li class="pricing-feature">5 модулей</li>\n' +
                    '<li class="pricing-feature">Уникальный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $89</li>',
                en: '<li class="pricing-feature">5 modules</li>\n' +
                    '<li class="pricing-feature">Unique design</li>\n' +
                    '<li class="pricing-feature">Orders to e-mail</li>\n' +
                    '<li class="pricing-feature">Customer texts</li>\n' +
                    '<li class="pricing-feature">Additional module $89</li>',
                pl: '<li class="pricing-feature">5 modułów</li>\n' +
                    '<li class="pricing-feature">Layout unikalny</li>\n' +
                    '<li class="pricing-feature">Zamówienia przez email</li>\n' +
                    '<li class="pricing-feature">Teksty od klienta</li>\n' +
                    '<li class="pricing-feature">Moduł dodatkowy $89</li>',
            }
        },
        {
            name: {
                ru: "Business",
                en: "Business",
                pl: "Business",
            },
            price: 899,
            modules: 5,
            modulePrice: 39,
            featureDescriptions: {
                ru: '<li class="pricing-feature">8 модулей</li>\n' +
                    '<li class="pricing-feature">Уникальный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки в CRM</li>\n' +
                    '<li class="pricing-feature">Тексты от профессионала</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $69</li>',
                en: '<li class="pricing-feature">8 modules</li>\n' +
                    '<li class="pricing-feature">Unique design</li>\n' +
                    '<li class="pricing-feature">Orders to CRM</li>\n' +
                    '<li class="pricing-feature">Texts from a pro</li>\n' +
                    '<li class="pricing-feature">Additional module $69</li>',
                pl: '<li class="pricing-feature">8 modułów</li>\n' +
                    '<li class="pricing-feature">Layout zawodowy</li>\n' +
                    '<li class="pricing-feature">Zamówienia przez CRM</li>\n' +
                    '<li class="pricing-feature">Teksty od fachowca</li>\n' +
                    '<li class="pricing-feature">Moduł dodatkowy $69</li>',
            }
        },
        {
            name: {
                ru: "Elite",
                en: "Elite",
                pl: "Elite",
            },
            price: 1099,
            modules: 3,
            modulePrice: 29,
            featureDescriptions: {
                ru: '<li class="pricing-feature">15 модулей</li>\n' +
                    '<li class="pricing-feature">Профессиональные анимации</li>\n' +
                    '<li class="pricing-feature">Уникальный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки в CRM</li>\n' +
                    '<li class="pricing-feature">Тексты от профессионала</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $69</li>',
                en: '<li class="pricing-feature">15 modules</li>\n' +
                    '<li class="pricing-feature">Professional animations</li>\n' +
                    '<li class="pricing-feature">Unique design</li>\n' +
                    '<li class="pricing-feature">Orders to CRM</li>\n' +
                    '<li class="pricing-feature">Texts from a pro</li>\n' +
                    '<li class="pricing-feature">Additional module $69</li>',
                pl: '<li class="pricing-feature">15 modułów</li>\n' +
                    '<li class="pricing-feature">Animacje zawodowe</li>\n' +
                    '<li class="pricing-feature">Layout zawodowy</li>\n' +
                    '<li class="pricing-feature">Zamówienia przez CRM</li>\n' +
                    '<li class="pricing-feature">Teksty od fachowca</li>\n' +
                    '<li class="pricing-feature">Moduł dodatkowy $69</li>',
            }
        }
    ]
};
export const service3 = {
    serviceIndex: 2,
    name: {
        ru: "Вебсайт",
        en: "Website",
        pl: "Strona internetowa",
    },
    addonIndicies: [],
    addonDiscounts: {},
    moduleLang: {
        ru: 'Кампании',
        en: 'Кампании',
        pl: 'Кампании'
    },
    description: {
        ru: 'Необходимый инструмент для компаний в интернет.',
        en: 'A necessary tool for companies on the Internet.',
        pl: 'Niezbędna rzecz dla firm w Internecie.',
    },
    packs: [
        {
            name: {
                ru: "Lite",
                en: "Lite",
                pl: "Lite",
            },
            price: 999,
            modules: 3,
            modulePrice: 69,
            featureDescriptions: {
                ru: '<li class="pricing-feature">5 страниц</li>\n' +
                    '<li class="pricing-feature">Профессиональные анимации</li>\n' +
                    '<li class="pricing-feature">Уникальный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты от клиента</li>\n' +
                    '<li class="pricing-feature">Доп. страница $99</li>',
                en: '<li class="pricing-feature">5 pages</li>\n' +
                    '<li class="pricing-feature">Professional animations</li>\n' +
                    '<li class="pricing-feature">Unique design</li>\n' +
                    '<li class="pricing-feature">Orders to email</li>\n' +
                    '<li class="pricing-feature">Texts from client</li>\n' +
                    '<li class="pricing-feature">Additional page $99</li>',
                pl: '<li class="pricing-feature">5 sekcji</li>\n' +
                    '<li class="pricing-feature">Animacje zawodowe</li>\n' +
                    '<li class="pricing-feature">Layout zawodowy</li>\n' +
                    '<li class="pricing-feature">Zamówienia przez email</li>\n' +
                    '<li class="pricing-feature">Teksty od klienta</li>\n' +
                    '<li class="pricing-feature">Sekcja dodatkowa $99</li>',
            }
        },
        {
            name: {
                ru: "Standard",
                en: "Standard",
                pl: "Standard",
            },
            price: 1099,
            modules: 4,
            modulePrice: 49,
            featureDescriptions: {
                ru: '<li class="pricing-feature">10 страниц</li>\n' +
                    '<li class="pricing-feature">Профессиональные анимации</li>\n' +
                    '<li class="pricing-feature">Уникальный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки в CRM</li>\n' +
                    '<li class="pricing-feature">Тексты от клиента</li>\n' +
                    '<li class="pricing-feature">Доп. страница $89</li>',
                en: '<li class="pricing-feature">10 pages</li>\n' +
                    '<li class="pricing-feature">Professional animations</li>\n' +
                    '<li class="pricing-feature">Unique design</li>\n' +
                    '<li class="pricing-feature">Orders to CRM</li>\n' +
                    '<li class="pricing-feature">Texts from client</li>\n' +
                    '<li class="pricing-feature">Additional page $89</li>',
                pl: '<li class="pricing-feature">10 sekcji</li>\n' +
                    '<li class="pricing-feature">Animacje zawodowe</li>\n' +
                    '<li class="pricing-feature">Layout zawodowy</li>\n' +
                    '<li class="pricing-feature">Zamówiena przez CRM</li>\n' +
                    '<li class="pricing-feature">Teksty od klienta</li>\n' +
                    '<li class="pricing-feature">Sekcja dodatkowa $89</li>',
            }
        },
        {
            name: {
                ru: "Business",
                en: "Business",
                pl: "Business",
            },
            price: 1299,
            modules: 5,
            modulePrice: 39,
            featureDescriptions: {
                ru: '<li class="pricing-feature">15 страниц</li>\n' +
                    '<li class="pricing-feature">Профессиональные анимации</li>\n' +
                    '<li class="pricing-feature">Уникальный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки в CRM</li>\n' +
                    '<li class="pricing-feature">Тексты от клиента</li>\n' +
                    '<li class="pricing-feature">Доп. страница $79</li>',
                en: '<li class="pricing-feature">15 pages</li>\n' +
                    '<li class="pricing-feature">Professional animations</li>\n' +
                    '<li class="pricing-feature">Unique design</li>\n' +
                    '<li class="pricing-feature">Orders to CRM</li>\n' +
                    '<li class="pricing-feature">Texts from client</li>\n' +
                    '<li class="pricing-feature">Additional page $79</li>',
                pl: '<li class="pricing-feature">15 sekcji</li>\n' +
                    '<li class="pricing-feature">Animacje zawodowe</li>\n' +
                    '<li class="pricing-feature">Layout zawodowy</li>\n' +
                    '<li class="pricing-feature">Zamówiena przez CRM</li>\n' +
                    '<li class="pricing-feature">Teksty od fachowca</li>\n' +
                    '<li class="pricing-feature">Sekcja dodatkowa $79</li>',
            }
        },
        {
            name: {
                ru: "Elite",
                en: "Elite",
                pl: "Elite",
            },
            price: 1499,
            modules: 6,
            modulePrice: 29,
            featureDescriptions: {
                ru: '<li class="pricing-feature">25 страниц</li>\n' +
                    '<li class="pricing-feature">Профессиональные анимации</li>\n' +
                    '<li class="pricing-feature">Уникальный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки в CRM</li>\n' +
                    '<li class="pricing-feature">Тексты от клиента</li>\n' +
                    '<li class="pricing-feature">Доп. страница $69</li>',
                en: '<li class="pricing-feature">25 pages</li>\n' +
                    '<li class="pricing-feature">Professional animations</li>\n' +
                    '<li class="pricing-feature">Unique design</li>\n' +
                    '<li class="pricing-feature">Orders to CRM</li>\n' +
                    '<li class="pricing-feature">Texts from client</li>\n' +
                    '<li class="pricing-feature">Additional page $69</li>',
                pl: '<li class="pricing-feature">25 sekcji</li>\n' +
                    '<li class="pricing-feature">Animacje zawodowe</li>\n' +
                    '<li class="pricing-feature">Layout zawodowy</li>\n' +
                    '<li class="pricing-feature">Zamówiena przez CRM</li>\n' +
                    '<li class="pricing-feature">Teksty od fachowca</li>\n' +
                    '<li class="pricing-feature">Sekcja dodatkowa $69</li>',
            }
        }
    ]
};

export const service4 = {
    serviceIndex: 2,
    name: {
        ru: "Интернет-магазин",
        en: "Online store",
        pl: "Sklep internetowy",
    },
    addonIndicies: [],
    addonDiscounts: {},
    moduleLang: {
        ru: 'Кампании',
        en: 'Кампании',
        pl: 'Кампании'
    },
    description: {
        ru: 'Решение для продаж широкого ассортимента товаров.',
        en: 'The best solution for selling a wide range of products.',
        pl: 'Rozwiązanie do sprzedaży szerokiej gamy produktów.',
    },
    packs: [
        {
            name: {
                ru: "Lite",
                en: "Lite",
                pl: "Lite",
            },
            price: 1399,
            modules: 3,
            modulePrice: 69,
            featureDescriptions: {
                ru: '<li class="pricing-feature">15 товаров</li>\n' +
                    '<li class="pricing-feature">Профессиональные анимации</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки в админ.панель</li>\n' +
                    '<li class="pricing-feature">Аналитика</li>\n' +
                    '<li class="pricing-feature">Тексты от клиента</li>\n' +
                    '<li class="pricing-feature">Доп. товар $20</li>',
                en: '<li class="pricing-feature">15 goods</li>\n' +
                    '<li class="pricing-feature">Professional animations</li>\n' +
                    '<li class="pricing-feature">Template design</li>\n' +
                    '<li class="pricing-feature">Orders to dashboard</li>\n' +
                    '<li class="pricing-feature">Analytics</li>\n' +
                    '<li class="pricing-feature">Texts by client</li>\n' +
                    '<li class="pricing-feature">Additional page $20</li>',
                pl: '<li class="pricing-feature">15 pozycji</li>\n' +
                    '<li class="pricing-feature">Layout szablonowy</li>\n' +
                    '<li class="pricing-feature">Zamówiena do panelu administracyjnego</li>\n' +
                    '<li class="pricing-feature">Analityka</li>\n' +
                    '<li class="pricing-feature">Teksty od klienta</li>\n' +
                    '<li class="pricing-feature">Pozycja dodatkowa $20</li>',
            }
        },
        {
            name: {
                ru: "Standard",
                en: "Standard",
                pl: "Standard",
            },
            price: 1599,
            modules: 4,
            modulePrice: 49,
            featureDescriptions: {
                ru: '<li class="pricing-feature">30 товаров</li>\n' +
                    '<li class="pricing-feature">Профессиональные анимации</li>\n' +
                    '<li class="pricing-feature">Уникальный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки в админ.панель</li>\n' +
                    '<li class="pricing-feature">Онлайн-оплата</li>\n' +
                    '<li class="pricing-feature">Аналитика</li>\n' +
                    '<li class="pricing-feature">Тексты от клиента</li>\n' +
                    '<li class="pricing-feature">Доп. товар $15</li>',
                en: '<li class="pricing-feature">30 goods</li>\n' +
                    '<li class="pricing-feature">Professional animations</li>\n' +
                    '<li class="pricing-feature">Unique design</li>\n' +
                    '<li class="pricing-feature">Orders to dashboard</li>\n' +
                    '<li class="pricing-feature">Online payments</li>\n' +
                    '<li class="pricing-feature">Analytics</li>\n' +
                    '<li class="pricing-feature">Texts by client</li>\n' +
                    '<li class="pricing-feature">Additional page $15</li>',
                pl: '<li class="pricing-feature">30 pozycji</li>\n' +
                    '<li class="pricing-feature">Layout zawodowy</li>\n' +
                    '<li class="pricing-feature">Zamówiena do panelu administracyjnego</li>\n' +
                    '<li class="pricing-feature">Płatnośc online</li>\n' +
                    '<li class="pricing-feature">Analityka</li>\n' +
                    '<li class="pricing-feature">Teksty od klienta</li>\n' +
                    '<li class="pricing-feature">Pozycja dodatkowa $15</li>',
            }
        },
        {
            name: {
                ru: "Business",
                en: "Business",
                pl: "Business",
            },
            price: 1999,
            modules: 5,
            modulePrice: 39,
            featureDescriptions: {
                ru: '<li class="pricing-feature">50 товаров</li>\n' +
                    '<li class="pricing-feature">Профессиональные анимации</li>\n' +
                    '<li class="pricing-feature">Уникальный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки в админ.панель</li>\n' +
                    '<li class="pricing-feature">Онлайн-оплата</li>\n' +
                    '<li class="pricing-feature">Системы доставки</li>\n' +
                    '<li class="pricing-feature">Продвинутая аналитика</li>\n' +
                    '<li class="pricing-feature">Тексты от профи</li>\n' +
                    '<li class="pricing-feature">Доп. товар $12</li>',
                en: '<li class="pricing-feature">50 goods</li>\n' +
                    '<li class="pricing-feature">Professional animations</li>\n' +
                    '<li class="pricing-feature">Unique design</li>\n' +
                    '<li class="pricing-feature">Orders to dashboard</li>\n' +
                    '<li class="pricing-feature">Online payments</li>\n' +
                    '<li class="pricing-feature">Delivery systems</li>\n' +
                    '<li class="pricing-feature">Improved analytics</li>\n' +
                    '<li class="pricing-feature">Texts by pro</li>\n' +
                    '<li class="pricing-feature">Additional page $12</li>',
                pl: '<li class="pricing-feature">50 pozycji</li>\n' +
                    '<li class="pricing-feature">Layout zawodowy</li>\n' +
                    '<li class="pricing-feature">Zamówiena do panelu administracyjnego</li>\n' +
                    '<li class="pricing-feature">Płatnośc online</li>\n' +
                    '<li class="pricing-feature">Dostawa online</li>\n' +
                    '<li class="pricing-feature">Szczególowe analityki</li>\n' +
                    '<li class="pricing-feature">Teksty od fachowca</li>\n' +
                    '<li class="pricing-feature">Pozycja dodatkowa $12</li>',
            }
        },
        {
            name: {
                ru: "Elite",
                en: "Elite",
                pl: "Elite",
            },
            price: 2499,
            modules: 6,
            modulePrice: 29,
            featureDescriptions: {
                ru: '<li class="pricing-feature">100 товаров</li>\n' +
                    '<li class="pricing-feature">Профессиональные анимации</li>\n' +
                    '<li class="pricing-feature">Уникальный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки в админ.панель + CRM</li>\n' +
                    '<li class="pricing-feature">Онлайн-оплата</li>\n' +
                    '<li class="pricing-feature">Системы доставки</li>\n' +
                    '<li class="pricing-feature">Продвинутая аналитика</li>\n' +
                    '<li class="pricing-feature">Тексты от профи</li>\n' +
                    '<li class="pricing-feature">Доп. товар $9</li>',
                en: '<li class="pricing-feature">100 goods</li>\n' +
                    '<li class="pricing-feature">Professional animations</li>\n' +
                    '<li class="pricing-feature">Unique design</li>\n' +
                    '<li class="pricing-feature">Orders to dashboard + CRM</li>\n' +
                    '<li class="pricing-feature">Online payments</li>\n' +
                    '<li class="pricing-feature">Delivery systems</li>\n' +
                    '<li class="pricing-feature">Improved analytics</li>\n' +
                    '<li class="pricing-feature">Texts by pro</li>\n' +
                    '<li class="pricing-feature">Additional page $9</li>',
                pl: '<li class="pricing-feature">100 pozycji</li>\n' +
                    '<li class="pricing-feature">Animacje zawodowe</li>\n' +
                    '<li class="pricing-feature">Layout zawodowy</li>\n' +
                    '<li class="pricing-feature">Zamówiena do panelu administracyjnego + CRM</li>\n' +
                    '<li class="pricing-feature">Płatnośc online</li>\n' +
                    '<li class="pricing-feature">Dostawa online</li>\n' +
                    '<li class="pricing-feature">Szczególowe analityki</li>\n' +
                    '<li class="pricing-feature">Teksty od fachowca</li>\n' +
                    '<li class="pricing-feature">Pozycja dodatkowa $9</li>',
            }
        }
    ]
};
export const service5 = {
    serviceIndex: 2,
    name: {
        ru: "Полный пакет",
        en: "Complete package",
        pl: "Full pakiet",
    },
    partnership: true,
    addonIndicies: [],
    addonDiscounts: {},
    moduleLang: {
        ru: 'Кампании',
        en: 'Кампании',
        pl: 'Кампании'
    },
    description: {
        ru: 'Создает у потребителя ассоциации с вашей фирмой',
        en: 'Creates consumer associations with your company',
        pl: 'Tworzy skojarzenia konsumentów z Twoją firmą.',
    },
    packs: [
        {
            name: {
                ru: "Lite",
                en: "Lite",
                pl: "Lite",
            },
            price: 1999,
            modules: 1,
            modulePrice: 69,
            featureDescriptions: {
                ru: '<li class="pricing-feature">1 месяц</li>\n' +
                    '<li class="pricing-feature">Логотип + Брендбук</li>\n' +
                    '<li class="pricing-feature">Лендинг</li>\n' +
                    '<li class="pricing-feature">Аналитика рынка</li>\n' +
                    '<li class="pricing-feature">Комуникационная платформа</li>\n' +
                    '<li class="pricing-feature">Нейминг, слоган, имидж бренда</li>\n' +
                    '<li class="pricing-feature">Доп. месяц $799</li>',
                en: '<li class="pricing-feature">1 month</li>\n' +
                    '<li class="pricing-feature">Logo + Brandbook</li>\n' +
                    '<li class="pricing-feature">Landing page</li>\n' +
                    '<li class="pricing-feature">Market analysis</li>\n' +
                    '<li class="pricing-feature">Communication platform</li>\n' +
                    '<li class="pricing-feature">Naming, motto, brand image</li>\n' +
                    '<li class="pricing-feature">Additional month $799</li>',
                pl: '<li class="pricing-feature">1 miesiąc</li>\n' +
                    '<li class="pricing-feature">Logo + Brandbook</li>\n' +
                    '<li class="pricing-feature">Landing page</li>\n' +
                    '<li class="pricing-feature">Badanie rynku</li>\n' +
                    '<li class="pricing-feature">Platforma komunikacyjna</li>\n' +
                    '<li class="pricing-feature">Naming, dewiza, wizerunek marki</li>\n' +
                    '<li class="pricing-feature">Dodatkowy mies. $799</li>',
            }
        },
        {
            name: {
                ru: "Standard",
                en: "Standard",
                pl: "Standard",
            },
            price: 2999,
            modules: 2,
            modulePrice: 49,
            featureDescriptions: {
                ru: '<li class="pricing-feature">2 месяца</li>\n' +
                    '<li class="pricing-feature">Логотип + Брендбук</li>\n' +
                    '<li class="pricing-feature">Сайт</li>\n' +
                    '<li class="pricing-feature">Аналитика рынка</li>\n' +
                    '<li class="pricing-feature">Комуникационная платформа</li>\n' +
                    '<li class="pricing-feature">Нейминг, слоган, имидж бренда</li>\n' +
                    '<li class="pricing-feature">Доп. месяц $799</li>',
                en: '<li class="pricing-feature">2 months</li>\n' +
                    '<li class="pricing-feature">Logo + Brandbook</li>\n' +
                    '<li class="pricing-feature">Website</li>\n' +
                    '<li class="pricing-feature">Market analysis</li>\n' +
                    '<li class="pricing-feature">Communication platform</li>\n' +
                    '<li class="pricing-feature">Naming, motto, brand image</li>\n' +
                    '<li class="pricing-feature">Additional month $799</li>',
                pl: '<li class="pricing-feature">2 miesiące</li>\n' +
                    '<li class="pricing-feature">Logo + Brandbook</li>\n' +
                    '<li class="pricing-feature">Strona internetowa</li>\n' +
                    '<li class="pricing-feature">Badanie rynku</li>\n' +
                    '<li class="pricing-feature">Platforma komunikacyjna</li>\n' +
                    '<li class="pricing-feature">Naming, dewiza, wizerunek marki</li>\n' +
                    '<li class="pricing-feature">Dodatkowy mies. $799</li>',
            }
        },
        {
            name: {
                ru: "Business",
                en: "Business",
                pl: "Business",
            },
            price: 5999,
            modules: 3,
            modulePrice: 39,
            featureDescriptions: {
                ru: '<li class="pricing-feature">3 месяца</li>\n' +
                    '<li class="pricing-feature">Логотип + Брендбук</li>\n' +
                    '<li class="pricing-feature">Стратегия развития</li>\n' +
                    '<li class="pricing-feature">Сайт или интернет-магазин</li>\n' +
                    '<li class="pricing-feature">Аналитика рынка</li>\n' +
                    '<li class="pricing-feature">Комуникационная платформа</li>\n' +
                    '<li class="pricing-feature">Нейминг, слоган, имидж бренда</li>\n' +
                    '<li class="pricing-feature">Дизайн промо-материалов</li>\n' +
                    '<li class="pricing-feature">Дизайн упаковки</li>\n' +
                    '<li class="pricing-feature">Доп. месяц $599</li>',
                en: '<li class="pricing-feature">3 months</li>\n' +
                    '<li class="pricing-feature">Logo + Brandbook</li>\n' +
                    '<li class="pricing-feature">development strategy</li>\n' +
                    '<li class="pricing-feature">Website or online store</li>\n' +
                    '<li class="pricing-feature">Market analysis</li>\n' +
                    '<li class="pricing-feature">Communication platform</li>\n' +
                    '<li class="pricing-feature">Naming, motto, brand image</li>\n' +
                    '<li class="pricing-feature">Design of promotional materials</li>\n' +
                    '<li class="pricing-feature">Packaging Design</li>\n' +
                    '<li class="pricing-feature">Additional month $599</li>',
                pl: '<li class="pricing-feature">3 miesiące</li>\n' +
                    '<li class="pricing-feature">Strategia rozwoju</li>\n' +
                    '<li class="pricing-feature">Logo + Brandbook</li>\n' +
                    '<li class="pricing-feature">Strona internetowa lub sklep internetowy</li>\n' +
                    '<li class="pricing-feature">Badanie rynku</li>\n' +
                    '<li class="pricing-feature">Platforma komunikacyjna</li>\n' +
                    '<li class="pricing-feature">Projektowanie materiałów promocyjnych</li>\n' +
                    '<li class="pricing-feature">Projekt opakowania</li>\n' +
                    '<li class="pricing-feature">Naming, dewiza, wizerunek marki</li>\n' +
                    '<li class="pricing-feature">Dodatkowy mies. $599</li>',
            }
        },
        {
            name: {
                ru: "Elite",
                en: "Elite",
                pl: "Elite",
            },
            price: 11999,
            modules: 6,
            modulePrice: 29,
            featureDescriptions: {
                ru: '<li class="pricing-feature">6 месяцев</li>\n' +
                    '<li class="pricing-feature">Логотип + Брендбук</li>\n' +
                    '<li class="pricing-feature">Стратегия развития</li>\n' +
                    '<li class="pricing-feature">Сайт или интернет-магазин</li>\n' +
                    '<li class="pricing-feature">Аналитика рынка</li>\n' +
                    '<li class="pricing-feature">Комуникационная платформа</li>\n' +
                    '<li class="pricing-feature">Нейминг, слоган, имидж бренда</li>\n' +
                    '<li class="pricing-feature">Дизайн промо-материалов</li>\n' +
                    '<li class="pricing-feature">Дизайн упаковки</li>\n' +
                    '<li class="pricing-feature">Доп. месяц $499</li>',
                en: '<li class="pricing-feature">6 months</li>\n' +
                    '<li class="pricing-feature">Logo + Brandbook</li>\n' +
                    '<li class="pricing-feature">development strategy</li>\n' +
                    '<li class="pricing-feature">Website or online store</li>\n' +
                    '<li class="pricing-feature">Market analysis</li>\n' +
                    '<li class="pricing-feature">Communication platform</li>\n' +
                    '<li class="pricing-feature">Naming, motto, brand image</li>\n' +
                    '<li class="pricing-feature">Design of promotional materials</li>\n' +
                    '<li class="pricing-feature">Packaging Design</li>\n' +
                    '<li class="pricing-feature">Additional month $499</li>',
                pl: '<li class="pricing-feature">6 miesiące</li>\n' +
                    '<li class="pricing-feature">Strategia rozwoju</li>\n' +
                    '<li class="pricing-feature">Logo + Brandbook</li>\n' +
                    '<li class="pricing-feature">Strona internetowa lub sklep internetowy</li>\n' +
                    '<li class="pricing-feature">Badanie rynku</li>\n' +
                    '<li class="pricing-feature">Platforma komunikacyjna</li>\n' +
                    '<li class="pricing-feature">Projektowanie materiałów promocyjnych</li>\n' +
                    '<li class="pricing-feature">Projekt opakowania</li>\n' +
                    '<li class="pricing-feature">Naming, dewiza, wizerunek marki</li>\n' +
                    '<li class="pricing-feature">Dodatkowy mies. $499</li>',
            }
        }
    ]
};
export const service6 = {
    serviceIndex: 2,
    name: {
        ru: "Маркетинг",
        en: "Marketing",
        pl: "Marketing",
    },
    addonIndicies: [],
    addonDiscounts: {},
    moduleLang: {
        ru: 'Кампании',
        en: 'Кампании',
        pl: 'Кампании'
    },
    description: {
        ru: 'Рекламируем с максимальной отдачей клиентов.',
        en: 'We advertise with maximum customer returns.',
        pl: 'Reklamujemy Cię maksymalnie skutecznie.',
    },
    packs: [
        {
            name: {
                ru: "Lite",
                en: "Lite",
                pl: "Lite",
            },
            price: 499,
            modules: 0,
            modulePrice: 499,
            featureDescriptions: {
                ru: '<li class="pricing-feature">1 концепция баннеров</li>\n' +
                    '<li class="pricing-feature">Кампания Facebook & Instagram</li>\n' +
                    '<li class="pricing-feature">Аналитика рынка</li>\n' +
                    '<li class="pricing-feature">Автоворонки</li>\n' +
                    '<li class="pricing-feature">Еженедельный отчёт</li>',
                en: '<li class="pricing-feature">1 banners concept</li>\n' +
                    '<li class="pricing-feature">Facebook & Instagram campaign</li>\n' +
                    '<li class="pricing-feature">Market analysis</li>\n' +
                    '<li class="pricing-feature">Automatic funnels</li>\n' +
                    '<li class="pricing-feature">Weekly report</li>',
                pl: '<li class="pricing-feature">1 koncepcja banerów</li>\n' +
                    '<li class="pricing-feature">Kampania na Facebooku i Instagramie</li>\n' +
                    '<li class="pricing-feature">Automatyczne lejki</li>\n' +
                    '<li class="pricing-feature">Badanie rynku</li>\n' +
                    '<li class="pricing-feature">Raport tygodniowy</li>',
            }
        },
        {
            name: {
                ru: "Standard",
                en: "Standard",
                pl: "Standard",
            },
            price: 599,
            modules: 1,
            modulePrice: 599,
            featureDescriptions: {
                ru: '<li class="pricing-feature">1 концепция баннеров</li>\n' +
                    '<li class="pricing-feature">20% скидка на 1-й месяц</li>\n' +
                    '<li class="pricing-feature">Кампания Facebook & Instagram</li>\n' +
                    '<li class="pricing-feature">Аналитика рынка</li>\n' +
                    '<li class="pricing-feature">Автоворонки</li>\n' +
                    '<li class="pricing-feature">Еженедельный отчёт</li>',
                en: '<li class="pricing-feature">1 banners concept</li>\n' +
                    '<li class="pricing-feature">20% discount for the 1st month</li>\n' +
                    '<li class="pricing-feature">Facebook & Instagram campaign</li>\n' +
                    '<li class="pricing-feature">Market analysis</li>\n' +
                    '<li class="pricing-feature">Automatic client generation</li>\n' +
                    '<li class="pricing-feature">Weekly report</li>',
                pl: '<li class="pricing-feature">1 koncepcja banerów</li>\n' +
                    '<li class="pricing-feature">20% discount for the 1st month</li>\n' +
                    '<li class="pricing-feature">Kampania na Facebooku i Instagramie</li>\n' +
                    '<li class="pricing-feature">Automatyczne generowanie klientów</li>\n' +
                    '<li class="pricing-feature">Badanie rynku</li>\n' +
                    '<li class="pricing-feature">Raport tygodniowy</li>',
            }
        },
        {
            name: {
                ru: "Business",
                en: "Business",
                pl: "Business",
            },
            price: 999,
            modules: 1,
            modulePrice: 999,
            featureDescriptions: {
                ru: '<li class="pricing-feature">2 концепции баннеров</li>\n' +
                    '<li class="pricing-feature">20% скидка на первые 3 месяца</li>\n' +
                    '<li class="pricing-feature">Кампания Facebook & Instagram</li>\n' +
                    '<li class="pricing-feature">Аналитика рынка</li>\n' +
                    '<li class="pricing-feature">Автоворонки</li>\n' +
                    '<li class="pricing-feature">Еженедельный отчёт</li>',
                en: '<li class="pricing-feature">2 banners concepts</li>\n' +
                    '<li class="pricing-feature">20% discount for 3 month</li>\n' +
                    '<li class="pricing-feature">Facebook & Instagram campaign</li>\n' +
                    '<li class="pricing-feature">Market analysis</li>\n' +
                    '<li class="pricing-feature">Automatic client generation</li>\n' +
                    '<li class="pricing-feature">Weekly report</li>',
                pl: '<li class="pricing-feature">2 koncepcji banerów</li>\n' +
                    '<li class="pricing-feature">20% zniżki na 3 miesiące</li>\n' +
                    '<li class="pricing-feature">Kampania na Facebooku i Instagramie</li>\n' +
                    '<li class="pricing-feature">Automatyczne generowanie klientów</li>\n' +
                    '<li class="pricing-feature">Badanie rynku</li>\n' +
                    '<li class="pricing-feature">Raport tygodniowy</li>',
            }
        },
        {
            name: {
                ru: "Elite",
                en: "Elite",
                pl: "Elite",
            },
            price: 1999,
            modules: 1,
            modulePrice: 1999,
            featureDescriptions: {
                ru: '<li class="pricing-feature">3 концепции баннеров</li>\n' +
                    '<li class="pricing-feature">20% скидка на первые 3 месяца</li>\n' +
                    '<li class="pricing-feature">Лендинг</li>\n' +
                    '<li class="pricing-feature">Кампания Facebook & Instagram</li>\n' +
                    '<li class="pricing-feature">Аналитика рынка</li>\n' +
                    '<li class="pricing-feature">Автоворонки</li>\n' +
                    '<li class="pricing-feature">Отчет в реальном времени</li>',
                en: '<li class="pricing-feature">3 banners concepts</li>\n' +
                    '<li class="pricing-feature">20% discount for 3 month</li>\n' +
                    '<li class="pricing-feature">Landing page</li>\n' +
                    '<li class="pricing-feature">Facebook & Instagram campaign</li>\n' +
                    '<li class="pricing-feature">Market analysis</li>\n' +
                    '<li class="pricing-feature">Automatic client generation</li>\n' +
                    '<li class="pricing-feature">Real-time report</li>',
                pl: '<li class="pricing-feature">3 koncepcji banerów</li>\n' +
                    '<li class="pricing-feature">20% zniżki na 3 miesiące</li>\n' +
                    '<li class="pricing-feature">Landing page</li>\n' +
                    '<li class="pricing-feature">Kampania na Facebooku i Instagramie</li>\n' +
                    '<li class="pricing-feature">Automatyczne generowanie klientów</li>\n' +
                    '<li class="pricing-feature">Badanie rynku</li>\n' +
                    '<li class="pricing-feature">Raport w czasie rzeczywistym</li>',
            }
        }
    ]
};
const pricesConfig = {
    services: [
        service1,
        service2,
        service3,
        service4,
        service5,
        service6,
    ]
};
export default pricesConfig;
