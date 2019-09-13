import * as React from 'react'
import {clone} from 'ramda'
import {createMarkup, Lang, Pack, PricesConfig, Service, Order, Product, getProductInfo} from './config'
import useLang from '../../../hooks/useLang'
import {stepLang} from './Step2'
import {moreLang, removeLang, StepProps} from './Step1'
import {remove} from 'ramda'
import useMergeState from '../../../hooks/useMergeState'
import PlanItem from './PlanItem'




export const monthShortLang: Lang = {
    en: 'mon',
    pl: 'mon',
    ru: 'мес',
}

export const modulesLang: Lang = {
    en: 'modules',
    pl: 'модули',
    ru: 'модули',
}


export default (props: StepProps) => {
    const {onSubmit, config} = props
    const [order, setOrder] = useMergeState({bill: 'once', term: 12, count: 100, ...props.order} as Order)
    const productInfo = getProductInfo(config)
    const product0 = order.products[0]
    const totalPrice = order.products.reduce( (sum, product) =>
        productInfo.getBasePrice(product) + sum,
        0
    )
    const service0 = config.services[product0.serviceIndex]
    const pack0 = service0.packs[product0.packIndex]


    const isOrderDisabled = order.phone && order.name

    const checkPrice = totalPrice * 2
    let monthPrice = totalPrice / 12 * 1.4
    if(order.term === 24)
        monthPrice = totalPrice * 1.4 * 0.87 / 24
    if(order.term === 36)
        monthPrice = totalPrice * 1.4 * 0.77 / 36

    const patchProduct = (index: number) => (product: Partial<Product>) => {
        const newOrder = clone(order)
        newOrder.products[index] = {...newOrder.products[index], ...product}
        debugger
        setOrder(newOrder)
    }

    const onDelete = (index: number) => {
        setOrder({...order, products: remove(index, 1, order.products)})
        if(order.products.length === 0)
            props.onBack()
    }

    return         (
        <section className="step-third step-container">
            <div className="stepthree-container">
                <div className="leftone-3">
                    <div className="stepper">{useLang(stepLang)} 3/3</div>
                    <div className="step3-header">{useLang({
                        ru: 'Почти готово',
                        en: 'Почти готово',
                        pl: 'Почти готово',
                    })}</div>
                    <div className="step3-subheder">{useLang({
                        ru: 'Осталось выбрать метод оплаты',
                        en: 'Осталось выбрать метод оплаты',
                        pl: 'Осталось выбрать метод оплаты',
                    })}
                    </div>
                    <div className="s3-payment-items">
                        <div
                            className={"s3-payment-item " + (order.bill === 'once' ? ' activated' : '')}
                            onClick={() => setOrder({bill: 'once'})}
                        >
                            <div className="s3-payment-item-name">{useLang({
                                en: 'Покупка',
                                ru: 'Покупка',
                                pl: 'Покупка',
                            })}</div>
                            <div className="s3-payment-item-price">${totalPrice}</div>
                            <div className="s3-payment-item-descr">{useLang({
                                en: 'Единоразово',
                                ru: 'Единоразово',
                                pl: 'Единоразово',
                            })}</div>
                        </div>
                        <div className={"s3-payment-item " + (order.bill === 'periodic' ? ' activated' : '')}
                             onClick={() => setOrder({bill: 'periodic'})}
                        >
                            <div className="s3-payment-item-name">{useLang({
                                en: 'Subscribtion',
                                ru: 'Подписка',
                                pl: 'Подписка',
                            })}</div>
                            <input type="radio" value="male" checked={order.term === 12}
                                   onChange={(e) => {
                                       if (e.target.checked)
                                           setOrder({term: 12, bill: 'periodic'})
                                   }
                                   }
                            /> 12 {useLang(monthShortLang)} <br />
                            <input type="radio" value="female" checked={order.term === 24}   onChange={(e) => {
                                if (e.target.checked) {
                                    setOrder({term: 24, bill: 'periodic'})
                                }
                            }
                            }
                            /> 24 {useLang(monthShortLang)} <span>-13%</span><br />
                            <input
                                    type="radio"
                                    value="other"
                                    checked={order.term === 36}
                                   onChange={(e) => {
                                           if (e.target.checked)
                                               setOrder({term: 36, bill: 'periodic'})
                                   }}
                            /> 36 {useLang(monthShortLang)}  <span>-23%</span><br />
                            <div className="s3-payment-item-price">${monthPrice}</div>
                            <div className="s3-payment-item-descr">{useLang({
                                ru: 'В месяц',
                                pl:'В месяц',
                                en: 'В месяц',
                            })}</div>
                        </div>
                        <div className={"s3-payment-item " + (order.bill === 'check' ? ' activated' : '')}
                             onClick={() => setOrder({bill: 'check'})}
                        >
                            <div className="s3-payment-item-name">{useLang('Партнёрка', 'Patnership', 'Pshe....')}</div>
                            <input type=""
                                   placeholder={useLang('Чеков', 'Bills')}
                                   value={order.count}
                                   onChange={(e) => setOrder({count: Number(e.target.value) || 1})}
                            />
                            <div className="s3-payment-item-price">${Math.ceil(checkPrice / order.count * 100) / 100}</div>
                            <div className="s3-payment-item-descr">{
                                useLang('за чек', 'per one check')
                            }</div>
                        </div>
                    </div>
                    <div className="s3-final">
                        <input type="" onChange={ e => setOrder({name: e.target.value})}  placeholder={useLang({
                            ru: 'Имя',
                            en: 'Имя',
                            pl: 'Имя',
                        })}/>
                        <input type="" onChange={ e => setOrder({phone: e.target.value})}   placeholder={useLang({
                            ru: 'Телефон',
                            en: 'Phone',
                            pl: 'Телефон',
                        })}/>
                        <div className="pricing-item-button pricing-palden" style={ (!isOrderDisabled) ? {opacity: 0.3} : {}} onClick={
                            () =>
                                (!isOrderDisabled) &&
                                onSubmit(order)
                        }><span className="pricing-action">{
                            useLang('Заказать')
                        }</span></div>
                    </div>
                </div>
                <div className="rightone-3">
                    <div className="s3-total-header">{useLang('Ваша корзина', 'Your order', 'Ваш заказ')}:</div>
                        {
                            order.products.map( (p, index) =>
                                <CartItem config={config} onChange={patchProduct(index)} product={p} onDelete={() => onDelete(index)} />
                            )
                        }
                        <div className="s3-cart-bottom">
                            {useLang('Итого', 'Total', 'Итого')} : ${totalPrice}
                        </div>
                    </div>
                    {
                        /*
                        <div className="s3-cart-item collapsed">
                            <div className="s3-cart-item-header">
                                <div className="s3-cart-item-name">Logo</div>
                                <div className="s3-cart-item-price">$199
                                    <button>{useLang(moreLang)}</button>
                                    <button>{useLang(removeLang)}</button>
                                </div>
                            </div>
                            <div className="item-details">
                                <ul className='pricing-feature-list'>
                                    <li className="pricing-feature">Преимущества <span
                                        className="businesse">Business</span></li>
                                    <li className="pricing-feature">9 модулей <span
                                        className="trans2">(Business+2)</span></li>
                                    <li className="pricing-feature">Эксклюзивный дизайн</li>
                                    <li className="pricing-feature">2 круга правок</li>
                                    <li className="pricing-feature">Оповещение о заявке</li>
                                    <li className="pricing-feature">Перезвоним за 30 секунд</li>
                                    <li className="pricing-feature">Доп. модуль $39</li>
                                </ul>
                                <div className="modules"><h3>Модули</h3><span>-</span>9<span></span>+</div>
                            </div>

                        </div>
                        */

                    }

            </div>
        </section>
    )
}

const CartItem = ({config, product, onDelete, onChange}: {config: PricesConfig, product: Product, onDelete, onChange}) => {
    const [collapsed, setCollapsed] = React.useState(true)
    const service = config.services[product.serviceIndex]
    const pack =  service.packs[product.packIndex]
    const info = getProductInfo(config)
    return (
        <div className={"s3-cart-item "+ (collapsed ?  'collapsed' : '')}>
            <div className="s3-cart-item-header">
                <div className="s3-cart-item-name">{useLang(service.name)}</div>
                <div className="s3-cart-item-price">${info.getBasePrice(product)}
                <button onClick={() => setCollapsed(!collapsed)}>
                    {useLang('Меньше')}</button>
                    <button onClick={onDelete}>{useLang('Удалить')}</button></div>
            </div>
            <div className="item-details">
                <ul className='pricing-feature-list' dangerouslySetInnerHTML={createMarkup(useLang(pack.featureDescriptions))}>

                </ul>
                <div className="modules">
                    <h3>
                        {useLang(modulesLang)}
                    </h3>
                    <span
                        onClick={() =>
                            product.extraModules > 0 &&
                            onChange({extraModules: product.extraModules - 1})
                        }
                    >-</span>{product.extraModules + pack.modules}
                    <span onClick={() =>
                        onChange({extraModules: product.extraModules + 1})
                    }>+

                            </span></div>
            </div>
        </div>
    )
}