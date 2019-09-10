export function createMarkup(value) { return { __html: value }; }
;
export const service = {
    name: {
        ru: "Logo",
        en: "Logo",
        pl: "Logo",
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
            price: 400,
            modules: 3,
            modulePrice: 59,
            featureDescriptions: {
                ru: '<li className="pricing-feature">3 модуля</li>\n' +
                    '<li className="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li className="pricing-feature">Заявки на email</li>\n' +
                    '<li className="pricing-feature">Тексты клиента</li>\n' +
                    '<li className="pricing-feature">Доп. модуль $69</li>',
                en: '<li className="pricing-feature">3 модуля</li>\n' +
                    '<li className="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li className="pricing-feature">Заявки на email</li>\n' +
                    '<li className="pricing-feature">Тексты клиента</li>\n' +
                    '<li className="pricing-feature">Доп. модуль $69</li>',
                pl: '<li className="pricing-feature">3 модуля</li>\n' +
                    '<li className="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li className="pricing-feature">Заявки на email</li>\n' +
                    '<li className="pricing-feature">Тексты клиента</li>\n' +
                    '<li className="pricing-feature">Доп. модуль $69</li>',
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
                ru: '<li className="pricing-feature">3 модуля</li>\n' +
                    '<li className="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li className="pricing-feature">Заявки на email</li>\n' +
                    '<li className="pricing-feature">Тексты клиента</li>\n' +
                    '<li className="pricing-feature">Доп. модуль $69</li>',
                en: '<li className="pricing-feature">3 модуля</li>\n' +
                    '<li className="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li className="pricing-feature">Заявки на email</li>\n' +
                    '<li className="pricing-feature">Тексты клиента</li>\n' +
                    '<li className="pricing-feature">Доп. модуль $69</li>',
                pl: '<li className="pricing-feature">3 модуля</li>\n' +
                    '<li className="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li className="pricing-feature">Заявки на email</li>\n' +
                    '<li className="pricing-feature">Тексты клиента</li>\n' +
                    '<li className="pricing-feature">Доп. модуль $69</li>',
            }
        },
        {
            name: {
                ru: "Business",
                en: "Business",
                pl: "Business",
            },
            price: 400,
            modules: 3,
            modulePrice: 39,
            featureDescriptions: {
                ru: '<li className="pricing-feature">3 модуля</li>\n' +
                    '<li className="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li className="pricing-feature">Заявки на email</li>\n' +
                    '<li className="pricing-feature">Тексты клиента</li>\n' +
                    '<li className="pricing-feature">Доп. модуль $69</li>',
                en: '<li className="pricing-feature">3 модуля</li>\n' +
                    '<li className="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li className="pricing-feature">Заявки на email</li>\n' +
                    '<li className="pricing-feature">Тексты клиента</li>\n' +
                    '<li className="pricing-feature">Доп. модуль $69</li>',
                pl: '<li className="pricing-feature">3 модуля</li>\n' +
                    '<li className="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li className="pricing-feature">Заявки на email</li>\n' +
                    '<li className="pricing-feature">Тексты клиента</li>\n' +
                    '<li className="pricing-feature">Доп. модуль $69</li>',
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
