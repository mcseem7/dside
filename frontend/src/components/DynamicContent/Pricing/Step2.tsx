import React from 'react'
import {createMarkup, Lang, Order, Pack, PricesConfig, Service} from './config'
import useLang from '../../../hooks/useLang'
import {lessLang, modulesLang, moreLang, packageLang, removeLang, startsFromLang} from './Step1'

export type Step2Props = {
    onSubmit: (options: Partial<Order>) => any
    serviceIndex: number
    packIndex: number
    config: PricesConfig
}

export const stepLang: Lang = {
    ru: 'Шаг',
    pl: 'Шаг',
    en: 'step',
}

export const choiceLang: Lang = {
    ru: 'Ваш выбор',
    pl: 'Ваш выбор',
    en: 'You choice',
}

export const nextLang: Lang = {
    ru: 'Далее',
    pl: 'Далее',
    en: 'Next',
}

export default ({onSubmit, packIndex = 0, serviceIndex = 0, config}: Step2Props) => {
    const service = config.services[serviceIndex]
    const pack = service.packs[packIndex]

    const otherServices = config.services.filter( (value, index) => index !==packIndex)
    return        <section className="step-second step-container">
        <div className="steptwo-container">
            <div className="leftone">
                <div className="stepper">{useLang(stepLang)} 2/3</div>
                <div className="step2-header">{useLang(choiceLang)}:</div>
                <div className="planitem">
                    <div className="itemshort">
                        <div className="planname">
                            <div className="pricing-item-header">{useLang(service.name)}</div>
                            {useLang(packageLang)}
                            <span>{useLang(pack.name)}</span>
                        </div>
                        <div className="planprice">{useLang(startsFromLang)} ${pack.price}
                        <button>{useLang(lessLang)}</button><button>{useLang(removeLang)}</button></div>
                    </div>
                    <div className="item-details">
                        <ul className='pricing-feature-list' dangerouslySetInnertHTML={createMarkup(useLang(pack.featureDescriptions))}>

                        </ul>
                        <div className="modules">
                            <h3>{useLang(service.moduleLang)}</h3>
                            <span>-</span>
                                9
                            <span>+</span>
                        </div>
                    </div>
                </div>
                <div className="planitem collapsed">
                    <div className="itemshort">
                        <div className="planname"><div className="pricing-item-header">Logo</div>{useLang(packageLang)} <span>Elite</span></div>
                        <div className="planprice">от ${pack.price} <button>{useLang(moreLang)}</button><button>{useLang(removeLang)}</button></div>
                    </div>
                    <div className="item-details">
                        <ul className='pricing-feature-list' >
                        </ul>
                        <div className="modules"><h3>{useLang(modulesLang)}</h3><span>-</span>7<span></span>+</div>
                    </div>
                </div>
                <div className="bottom-step2">
                    <div className="total">{useLang('Итого', 'Total', 'Итого')}: $111</div>
                    <div className="pricing-item-button pricing-palden" onClick={
                        () =>
                            onSubmit({})
                    }>
                        <span className="pricing-action" >
                            {useLang(nextLang)}
                        </span>
                    </div>
                </div>
            </div>
            <div className="rightone">
                <div className="services-pricing-item">
                    <div className="pricing-item-descr">
                        <div className="pricing-discount-header">
                            <div className="pricing-item-header"><span>01. </span>Logo</div>
                            <div className="discount">-35%</div>
                        </div>
                        <div className="pricing-item-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                    <div className="pricing-item-controls">
                        <div className="pricing-item-price"><div className="oldprice">$530</div><span>от </span>$240</div>
                        <div className="pricing-item-button pricing-palden"><span className="pricing-action">{useLang('Добавить', 'Add', 'Add')}</span></div>
                    </div>
                </div>
                <div className="services-pricing-item">
                    <div className="pricing-item-descr">
                        <div className="pricing-item-header"><span>01. </span>Logo</div>
                        <div className="pricing-item-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                    <div className="pricing-item-controls">
                        <div className="pricing-item-price"><span>{useLang(startsFromLang)} </span>$240</div>
                        <div className="pricing-item-button pricing-palden"><span className="pricing-action">Button</span></div>
                    </div>
                </div>


            </div>
        </div>
    </section>
}