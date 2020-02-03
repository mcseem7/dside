import React from 'react'
import {createMarkup, Lang, Order, Pack, PricesConfig, Service} from './config'
import useLang from '../../../hooks/useLang'
import {take} from 'ramda'
import PacksList from './PacksList'

export const startsFromLang: Lang = {
    ru: 'от',
    pl: 'от',
    en: 'from',
}

export const orderLang: Lang = {
    ru: 'Заказать',
    pl: 'Заказать',
    en: 'Order',
}

export const moreLang: Lang = {
    ru: 'Больше',
    pl: 'Больше',
    en: 'More',
}

export const lessLang: Lang = {
    ru: 'Меньше',
    pl: 'Меньше',
    en: 'Less',
}


export const removeLang: Lang = {
    ru: 'Удалить',
    pl: 'Удалить',
    en: 'Remove',
}

export const modulesLang: Lang = {
    ru: 'Модули',
    pl: 'Модули',
    en: 'Modules',
}

export const packageLang: Lang = {
    ru: 'Пакет',
    pl: 'Пакет',
    en: 'Package',
}




export type StepProps = {
    config: PricesConfig
    order: Partial<Order>
    onSubmit: (order: Partial<Order>) => any
    onBack?: () => any
}


export default ({config, onSubmit}: StepProps) => {

    const [index, setIndex] = React.useState(undefined)
    const selectedSevice = config.services[index]
    const packs = selectedSevice ? selectedSevice.packs : []
    return <section className="step-first step-container" >
        <div className="pricing__wrapper">
            <div className="services-pricing-grid">
                {
                    config.services.map((service, curIndex) =>
                        <div className={"services-pricing-item " + (index === curIndex ? 'activated' : '')}
                             onClick={() => setIndex(curIndex)}>
                            <div className="pricing-item-descr">
                                <div className="pricing-item-header"><span>{Number(curIndex + 1)}. </span>{useLang(service.name)}</div>
                                <div className="pricing-item-content">{useLang(service.description)}
                                </div>
                            </div>
                            <div className="pricing-item-controls">
                                <div className="pricing-item-price">
                                    <span>{useLang(startsFromLang)} </span>${service.packs[0].price}
                                </div>
                                <div className="pricing-item-button pricing-palden b"><span
                                    className="pricing-action">{useLang('Рассчитать', 'Calculate', 'Rachuj')}</span></div>
                            </div>
                        </div>
                    )
                }
            </div>
            {index !== undefined &&
            <PacksList serviceIndex={index} config={config} onSelect={(packIndex) =>
                onSubmit({
                    products: [{
                        packIndex,
                        serviceIndex: index,
                        extraModules: 0,
                    }]
                })
            }
            />
            }
        </div>
    </section>
}