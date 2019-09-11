import * as React from 'react';
import { createMarkup } from './config';
import useLang from '../../../hooks/useLang';
import { stepLang } from './Step2';
export const monthShortLang = {
    en: 'mon',
    pl: 'mon',
    ru: 'мес',
};
export const modulesLang = {
    en: 'modules',
    pl: 'модули',
    ru: 'модули',
};
export default ({ config, onSubmit, value }) => {
    const [order, setOrder] = React.useState({ bill: 'once', term: 12, count: 100 });
    const price = config.services[value.serviceIndex].packs[value.packIndex].price;
    const service = config.services[value.serviceIndex];
    const pack = service.packs[value.packIndex];
    const patchOrder = (patch) => setOrder(Object.assign({}, order, patch));
    const isOrderDisabled = order.phone && order.name;
    const checkPrice = price * 1.4;
    let monthPrice = price / 12;
    if (order.term === 24)
        monthPrice = price * 1.4 * 0.87 / 24;
    if (order.term === 36)
        monthPrice = price * 1.4 * 0.77 / 36;
    return (<section className="step-third step-container">
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
                        <div className={"s3-payment-item " + (order.bill === 'once' ? ' activated' : '')} onClick={() => patchOrder({ bill: 'once' })}>
                            <div className="s3-payment-item-name">{useLang({
        en: 'Покупка',
        ru: 'Покупка',
        pl: 'Покупка',
    })}</div>
                            <div className="s3-payment-item-price">${price}</div>
                            <div className="s3-payment-item-descr">{useLang({
        en: 'Единоразово',
        ru: 'Единоразово',
        pl: 'Единоразово',
    })}</div>
                        </div>
                        <div className={"s3-payment-item " + (order.bill === 'periodic' ? ' activated' : '')} onClick={() => patchOrder({ bill: 'periodic' })}>
                            <div className="s3-payment-item-name">{useLang({
        en: 'Subscribtion',
        ru: 'Подписка',
        pl: 'Подписка',
    })}</div>
                            <input type="radio" value="male" checked={order.term === 12} onChange={(e) => {
        if (e.target.checked)
            patchOrder({ term: 12 });
    }}/> 12 {useLang(monthShortLang)} <br />
                            <input type="radio" value="female" checked={order.term === 24} onChange={(e) => {
        if (e.target.checked)
            patchOrder({ term: 24 });
    }}/> 24 {useLang(monthShortLang)} <span>-13%</span><br />
                            <input type="radio" value="other" checked={order.term === 36} onChange={(e) => {
        if (e.target.checked)
            patchOrder({ term: 36 });
    }}/> 36 {useLang(monthShortLang)}  <span>-23%</span><br />
                            <div className="s3-payment-item-price">${monthPrice}</div>
                            <div className="s3-payment-item-descr">{useLang({
        ru: 'В месяц',
        pl: 'В месяц',
        en: 'В месяц',
    })}</div>
                        </div>
                        <div className={"s3-payment-item " + (order.bill === 'check' ? ' activated' : '')} onClick={() => patchOrder({ bill: 'check' })}>
                            <div className="s3-payment-item-name">{useLang('Партнёрка', 'Patnership', 'Pshe....')}</div>
                            <input type="" placeholder={useLang('Чеков', 'Bills')} value={order.count} onChange={(e) => patchOrder({ count: Number(e.target.value) || 1 })}/>
                            <div className="s3-payment-item-price">${Math.ceil(checkPrice / order.count * 100) / 100}</div>
                            <div className="s3-payment-item-descr">{useLang('за чек', 'per one check')}</div>
                        </div>
                    </div>
                    <div className="s3-final">
                        <input type="" onChange={e => patchOrder({ name: e.target.value })} placeholder={useLang({
        ru: 'Имя',
        en: 'Имя',
        pl: 'Имя',
    })}/>
                        <input type="" onChange={e => patchOrder({ phone: e.target.value })} placeholder={useLang({
        ru: 'Телефон',
        en: 'Phone',
        pl: 'Телефон',
    })}/>
                        <div className="pricing-item-button pricing-palden" onClick={() => (!isOrderDisabled) &&
        onSubmit(order)}><span className="pricing-action">{useLang('Заказать')}</span></div>
                    </div>
                </div>
                <div className="rightone-3">
                    <div className="s3-total-header">{useLang('Ваша корзина', 'Your order', 'Ваш заказ')}:</div>
                    <div className="s3-cart-item">
                        <div className="s3-cart-item-header">
                            <div className="s3-cart-item-name">{useLang(service.name)}</div>
                            <div className="s3-cart-item-price">${pack.price}<button>{useLang('Меньше')}</button><button>{useLang('Удалить')}</button></div>
                        </div>
                        <div className="item-details">
                            <ul className='pricing-feature-list' dangerouslySetInnerHTML={createMarkup(useLang(pack.featureDescriptions))}>

                            </ul>
                            <div className="modules">
                                <h3>
                                    {useLang(modulesLang)}
                                </h3>
                                <span onClick={() => order.extraModules > 0 && patchOrder({ extraModules: order.extraModules - 1 })}>-</span>{order.extraModules + pack.modules}<span onClick={() => patchOrder({ extraModules: order.extraModules + 1 })}>+

                            </span></div>
                            </div>
                        </div>
                        <div className="s3-cart-bottom">
                            {useLang('Итого', 'Total', 'Итого')} : ${order.extraModules * pack.modulePrice + pack.price}
                        </div>
                    </div>
                    

            </div>
        </section>);
};
