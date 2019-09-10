import * as React from 'react';
import useLang from '../../../hooks/useLang';
import { stepLang } from './Step2';
import { moreLang, removeLang } from './Step1';
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
    const [order, setOrder] = React.useState({});
    const patchOrder = (patch) => setOrder(Object.assign({}, order, patch));
    const isOrderDisabled = order.phone && order.name;
    return (<section className="step-third">
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
                        <div className="s3-payment-item">
                            <div className="s3-payment-item-name">{useLang({
        en: 'Покупка',
        ru: 'Покупка',
        pl: 'Покупка',
    })}</div>
                            <div className="s3-payment-item-price">$384</div>
                            <div className="s3-payment-item-descr">{useLang({
        en: 'Единоразово',
        ru: 'Единоразово',
        pl: 'Единоразово',
    })}</div>
                        </div>
                        <div className="s3-payment-item activated">
                            <div className="s3-payment-item-name">{useLang({
        en: 'Подписка',
        ru: 'Подписка',
        pl: 'Подписка',
    })}</div>
                            <input type="radio" value="male"/> 12 {useLang(monthShortLang)} <br />
                            <input type="radio" value="female"/> 24 {useLang(monthShortLang)} <span>-13%</span><br />
                            <input type="radio" value="other"/> 36 {useLang(monthShortLang)}  <span>-23%</span><br />
                            <div className="s3-payment-item-price">$384</div>
                            <div className="s3-payment-item-descr">{useLang({
        ru: 'В месяц',
        pl: 'В месяц',
        en: 'В месяц',
    })}</div>
                        </div>
                        <div className="s3-payment-item">
                            <div className="s3-payment-item-name">{useLang('Партнёрка', 'Patnership', 'Pshe....')}</div>
                            <input type="" placeholder="Чеков"/>
                            <div className="s3-payment-item-price">$384</div>
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
                            <div className="s3-cart-item-name">Logo</div>
                            <div className="s3-cart-item-price">$199<button>{useLang('Меньше')}</button><button>{useLang('Удалить')}</button></div>
                        </div>
                        <div className="item-details">
                            <ul className='pricing-feature-list'>
                                <li className="pricing-feature">Преимущества <span className="businesse">Business</span></li>
                                <li className="pricing-feature">9 модулей <span className="trans2">(Business+2)</span></li>
                                <li className="pricing-feature">Эксклюзивный дизайн</li>
                                <li className="pricing-feature">2 круга правок</li>
                                <li className="pricing-feature">Оповещение о заявке</li>
                                <li className="pricing-feature">Перезвоним за 30 секунд</li>
                                <li className="pricing-feature">Доп. модуль $39</li>
                            </ul>
                            <div className="modules">
                                <h3>
                                    {useLang(modulesLang)}
                                </h3>
                                <span>-</span>9<span>+</span>
                            </div>
                        </div>
                    </div>
                    <div className="s3-cart-item collapsed">
                        <div className="s3-cart-item-header">
                            <div className="s3-cart-item-name">Logo</div>
                            <div className="s3-cart-item-price">$199<button>{useLang(moreLang)}</button><button>{useLang(removeLang)}</button></div>
                        </div>
                        <div className="item-details">
                            <ul className='pricing-feature-list'>
                                <li className="pricing-feature">Преимущества <span className="businesse">Business</span></li>
                                <li className="pricing-feature">9 модулей <span className="trans2">(Business+2)</span></li>
                                <li className="pricing-feature">Эксклюзивный дизайн</li>
                                <li className="pricing-feature">2 круга правок</li>
                                <li className="pricing-feature">Оповещение о заявке</li>
                                <li className="pricing-feature">Перезвоним за 30 секунд</li>
                                <li className="pricing-feature">Доп. модуль $39</li>
                            </ul>
                            <div className="modules"><h3>Модули</h3><span>-</span>9<span></span>+</div>
                        </div>
                        <div className="s3-cart-bottom">
                            {useLang('Итого', 'Total', 'Итого')} : $398
                        </div>
                    </div>
                </div>
            </div>
        </section>);
};
