
export type Lang = {
    ru: string,
    en: string,
    pl: string
}

export type Service = {
    name: Lang
    description: Lang
    packs: Pack[]
}

export type Pack = {
    name: Lang
    price: number
    featureDescriptions: Lang
    modulePrice: number
    modules: number
}

export type PricesConfig = {
    services: Service[]
}

export function createMarkup(value: string) { return {__html: value}; };

export const service: Service = {
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
}

const pricesConfig: PricesConfig = {
    services: [
            service,
            service,
            service,
    ]
}

export default pricesConfig