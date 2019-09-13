import {checkPropTypes} from 'prop-types'

export type Lang = {
    ru: string,
    en: string,
    pl: string
}

export type Service = {
    serviceIndex: number
    name: Lang
    description: Lang
    moduleLang: Lang
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

export type Order = {
    products: Product[]
    phone?: string
    name?: string
    totalPrice?: number
    bill?: 'once' | 'periodic' | 'check'
    term?: 12 | 24 | 36
    count?: number
}

export type Product = {
    packIndex: number
    serviceIndex: number
    extraModules: number
}

export function createMarkup(value: string) { return {__html: value}; };


export const getProductInfo = (config: PricesConfig) => {
    const getService = (product: Product) =>
        config.services[product.serviceIndex]

    const getPack = (product: Product) =>
        getService(product).packs[product.serviceIndex]

    const getBasePrice = (product: Product) =>
        getPack(product).price + getPack(product).modulePrice * (product.extraModules || 0)

    const getText = (product: Product) => {
        return getService(product).name.ru + ': '+ getPack(product).name.ru + ' extraModules ' + product.extraModules
    }
    return {
        getPack,
        getService,
        getBasePrice,
        getText
    }
}

export const service1: Service = {
    serviceIndex: 0,
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

            price: 199,
            modules: 3,
            modulePrice: 69,
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
            price: 249,
            modules: 4,
            modulePrice: 49,
            featureDescriptions: {
                ru: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $49</li>',
                en: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $49</li>',
                pl: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $49</li>',
            }
        },
        {
            name: {
                ru: "Business",
                en: "Business",
                pl: "Business",
            },
            price: 299,
            modules: 5,
            modulePrice: 39,
            featureDescriptions: {
                ru: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $39</li>',
                en: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $39</li>',
                pl: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $39</li>',
            }
        },
        {
            name: {
                ru: "Elite",
                en: "Elite",
                pl: "Elite",
            },
            price: 800,
            modules: 6,
            modulePrice: 29,
            featureDescriptions: {
                ru: '<li class="pricing-feature">6 модулей</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $29</li>',
                en: '<li class="pricing-feature">6 модулей</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $29</li>',
                pl: '<li class="pricing-feature">6 модулей</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $29</li>',
            }
        }
    ]
}

export const service2: Service = {
    serviceIndex: 1,
    name: {
        ru: "Landing",
        en: "Landing",
        pl: "Landing",
    },
    moduleLang: {
        ru: 'Модули',
        en: 'Модули',
        pl: 'Модули'
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

            price: 399,
            modules: 3,
            modulePrice: 69,
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
            price: 499,
            modules: 4,
            modulePrice: 49,
            featureDescriptions: {
                ru: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $49</li>',
                en: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $49</li>',
                pl: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $49</li>',
            }
        },
        {
            name: {
                ru: "Business",
                en: "Business",
                pl: "Business",
            },
            price: 699,
            modules: 5,
            modulePrice: 39,
            featureDescriptions: {
                ru: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $39</li>',
                en: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $39</li>',
                pl: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $39</li>',
            }
        },
        {
            name: {
                ru: "Elite",
                en: "Elite",
                pl: "Elite",
            },
            price: 899,
            modules: 3,
            modulePrice: 29,
            featureDescriptions: {
                ru: '<li class="pricing-feature">6 модулей</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $29</li>',
                en: '<li class="pricing-feature">6 модулей</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $29</li>',
                pl: '<li class="pricing-feature">6 модулей</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $29</li>',
            }
        }
    ]
}
export const service3: Service = {
    serviceIndex: 2,
    name: {
        ru: "Promotion",
        en: "Promotion",
        pl: "Promotion",
    },
    moduleLang: {
        ru: 'Кампании',
        en: 'Кампании',
        pl: 'Кампании'
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

            price: 999,
            modules: 3,
            modulePrice: 69,
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
            price: 1099,
            modules: 4,
            modulePrice: 49,
            featureDescriptions: {
                ru: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $49</li>',
                en: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $49</li>',
                pl: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $49</li>',
            }
        },
        {
            name: {
                ru: "Business",
                en: "Business",
                pl: "Business",
            },
            price: 1199,
            modules: 5,
            modulePrice: 39,
            featureDescriptions: {
                ru: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $39</li>',
                en: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $39</li>',
                pl: '<li class="pricing-feature">3 модуля</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $39</li>',
            }
        },
        {
            name: {
                ru: "Elite",
                en: "Elite",
                pl: "Elite",
            },
            price: 1299,
            modules: 6,
            modulePrice: 29,
            featureDescriptions: {
                ru: '<li class="pricing-feature">6 модулей</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $29</li>',
                en: '<li class="pricing-feature">6 модулей</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $29</li>',
                pl: '<li class="pricing-feature">6 модулей</li>\n' +
                    '<li class="pricing-feature">Шаблонный дизайн</li>\n' +
                    '<li class="pricing-feature">Заявки на email</li>\n' +
                    '<li class="pricing-feature">Тексты клиента</li>\n' +
                    '<li class="pricing-feature">Доп. модуль $29</li>',
            }
        }
    ]
}
const pricesConfig: PricesConfig = {
    services: [
            service1,
            service2,
            service3,
    ]
}

export default pricesConfig