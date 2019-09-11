export function createMarkup(value) { return { __html: value }; }
;
export const service = {
    name: {
        ru: "Logo",
        en: "Logo",
        pl: "Logo",
    },
    moduleLang: {
        ru: 'Эскиз',
        en: 'Draft',
        pl: 'Набросок'
    },
    description: {
        ru: 'RU Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        en: ' EN Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        pl: 'PL Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    packs: [
        {
            name: {
                ru: "Lite",
                en: "Lite",
                pl: "Lite",
            },
            price: 299,
            modules: 3,
            modulePrice: 59,
            featureDescriptions: {
                ru: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $69</li>',
                en: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $69</li>',
                pl: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $69</li>',
            }
        },
        {
            name: {
                ru: "Lite +",
                en: "Lite + ",
                pl: "Lite + ",
            },
            price: 400,
            modules: 3,
            modulePrice: 49,
            featureDescriptions: {
                ru: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $69</li>',
                en: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $69</li>',
                pl: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $69</li>',
            }
        },
        {
            name: {
                ru: "Business",
                en: "Business",
                pl: "Business",
            },
            price: 600,
            modules: 3,
            modulePrice: 39,
            featureDescriptions: {
                ru: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $69</li>',
                en: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $69</li>',
                pl: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $69</li>',
            }
        },
        {
            name: {
                ru: "Elite",
                en: "Elite",
                pl: "Elite",
            },
            price: 800,
            modules: 3,
            modulePrice: 29,
            featureDescriptions: {
                ru: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $69</li>',
                en: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $69</li>',
                pl: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $69</li>',
            }
        }
    ]
};
const pricesConfig = {
    services: [
        service,
        service,
        service,
    ]
};
export default pricesConfig;
