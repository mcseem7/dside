import * as React from 'react';
import { clone } from 'ramda';
import { createMarkup, getProductInfo, normalizePrice } from './config';
import useLang from '../../../hooks/useLang';
import { stepLang } from './Step2';
import { packageLang, startsFromLang } from './Step1';
import { remove } from 'ramda';
import useMergeState from '../../../hooks/useMergeState';
export const monthShortLang = {
    en: 'mon',
    pl: 'mies',
    ru: 'мес',
};
export const modulesLang = {
    en: 'modules',
    pl: 'moduły',
    ru: 'модули',
};
export default (props) => {
    window.scrollTo(0, 0);
    const { onSubmit, config } = props;
    const [order, setOrder] = useMergeState(Object.assign({ bill: 'once', term: 12, count: 1000 }, props.order));
    const productInfo = getProductInfo(config);
    const product0 = order.products[0] || { serviceIndex: 0, packIndex: 0 };
    const service0 = config.services[product0.serviceIndex];
    const pack0 = service0.packs[product0.packIndex];
    const isParntership = service0.partnership;
    const totalPrice = normalizePrice(order.products.reduce((sum, product) => productInfo.getBasePrice(product, service0.addonDiscounts[product.serviceIndex] || 0) + sum, 0));
    const isOrderDisabled = order.phone && order.name;
    const checkPrice = totalPrice * 2;
    let monthPrice = totalPrice / 12 * 1.8;
    if (order.term === 24)
        monthPrice = totalPrice * 3.6 * 0.90 / 24;
    if (order.term === 36)
        monthPrice = totalPrice * 5.4 * 0.75 / 36;
    monthPrice = normalizePrice(monthPrice);
    const patchProduct = (index) => (product) => {
        const newOrder = clone(order);
        newOrder.products[index] = Object.assign({}, newOrder.products[index], product);
        debugger;
        setOrder(newOrder);
    };
    const onDelete = (index) => {
        const newOrder = Object.assign({}, order, { products: remove(index, 1, order.products) });
        setOrder(newOrder);
        if (newOrder.products.length === 0)
            props.onBack();
    };
    return (<section className="step-third step-container">
            <div className="stepthree-container">
                <div className="leftone">
                    <div className="s3-header">{useLang({
        ru: 'Осталось выбрать метод оплаты',
        en: 'Осталось выбрать метод оплаты',
        pl: 'Wybierz warunki płatności',
    })}
                    </div>
                    <div className="s3-payment-items">
                        <div className={"s3-payment-item shady " + (order.bill === 'once' ? ' activated' : '')} onClick={() => setOrder({ bill: 'once' })}>
                            <div className="s3-payment-item-name">{useLang({
        en: 'Покупка',
        ru: 'Покупка',
        pl: 'Kupno',
    })}</div>
                            <div><div className="pricing-item-price"><span className='pricing-period'>{useLang(startsFromLang)}</span> ${totalPrice}</div>
                            <div className="s3-payment-item-descr">{useLang({
        en: 'Единоразово',
        ru: 'Единоразово',
        pl: 'Jednorazowo',
    })}</div></div>
                        </div>
                        <div className={"s3-payment-item shady " + (order.bill === 'periodic' ? ' activated' : '')} onClick={() => setOrder({ bill: 'periodic' })}>
                            <div className="s3-payment-item-name">{useLang({
        en: 'Subscribtion',
        ru: 'Подписка',
        pl: 'Subskrypcja',
    })}</div>
                            <div className="plans">
                            <input type="radio" className="subsc-radio" id="subs-1"  checked={order.term === 12} onChange={(e) => {
        if (e.target.checked)
            setOrder({ term: 12, bill: 'periodic' });
    }}/> <label className="subsclabel" for="subs-1"><span>12</span> {useLang(monthShortLang)}</label> <br />
                            <input type="radio"  className="subsc-radio" id="subs-2" checked={order.term === 24} onChange={(e) => {
        if (e.target.checked) {
            setOrder({ term: 24, bill: 'periodic' });
        }
    }}/> <label className="subsclabel" for="subs-2"><span>24</span> {useLang(monthShortLang)} <span className="discplan">-10%</span></label><br />
                            <input type="radio"  className="subsc-radio" id="subs-3" checked={order.term === 36} onChange={(e) => {
        if (e.target.checked)
            setOrder({ term: 36, bill: 'periodic' });
    }}/> <label className="subsclabel" for="subs-3"><span>36</span> {useLang(monthShortLang)}  <span className="discplan">-25%</span></label><br />
                           </div>
                            <div className="pricing-item-price"><span className='pricing-period'>{useLang(startsFromLang)}</span> ${monthPrice}</div>
                            <div className="s3-payment-item-descr">{useLang({
        ru: 'В месяц',
        pl: 'Miesięcznie',
        en: 'Monthly',
    })}</div>
                        </div>
                       {isParntership ? (
                        <div className={"s3-payment-item shady " + (order.bill === 'check' ? ' activated' : '')} onClick={() => setOrder({ bill: 'check' })}>
                            <div className="s3-payment-item-name">{useLang('Партнёрство', 'Patnership', 'Warunki partnerskie')}</div>
                            <div className="inputs">
                             <label for="#bills">{useLang({
        ru: 'Чеков в месяц',
        pl: 'Czeków miesięcznie',
        en: 'Checks per month',
    })}</label>
                            <input type="" id="bills" placeholder={useLang('Чеков', 'Czeków', 'Bills')} value={order.count} onChange={(e) => setOrder({ count: Number(e.target.value) || 1 })}/>
                            </div>
                           <div>
                            <div className="pricing-item-price"><span className='pricing-period'>{useLang(startsFromLang)}</span> ${Math.ceil(checkPrice / order.count * 100 / 12) / 100}</div>
                            <div className="s3-payment-item-descr">{useLang('за чек', 'per one receipt', 'Za paragon')}</div>
                        </div>
                        </div>) : (
                            <div className="s3-payment-item shady s3-inactive">
                            <div className="s3-payment-item-name">{useLang('Партнёрство', 'Patnership', 'Warunki partnerskie')}</div>
                            <div className="inputs">
                             <label for="#bills">{useLang({
        ru: 'Патнерство недоступно для выбранных услуг. Выберите полный пакет.',
        pl: 'Partnerstwo nie jest dostępne dla wybranych usług. Wybierz full pakiet.',
        en: 'The partnership is not available for the selected services. Select the complete package.',
    })}</label>
                            </div>
                           <div>
                            <div className="pricing-item-price"><span className='pricing-period'>{useLang(startsFromLang)}</span> ${Math.ceil(checkPrice / order.count * 10 / 12) / 100}</div>
                            <div className="s3-payment-item-descr">{useLang('за чек', 'per one receipt', 'Za paragon')}</div>
                        </div>
                        </div>
                       )}
                        </div>
                    <div className="s3-final">
                        <input type="" onChange={e => setOrder({ name: e.target.value })} placeholder={useLang({
        ru: 'Имя',
        en: 'Name',
        pl: 'Imię',
    })}/>
                        <input type="" onChange={e => setOrder({ phone: e.target.value })} placeholder={useLang({
        ru: 'Телефон',
        en: 'Phone',
        pl: 'Numer telefonu',
    })}/>
                        <div className="btn-send btn-calc" style={(!isOrderDisabled) ? { opacity: 0.3 } : {}} onClick={() => (isOrderDisabled) &&
        onSubmit(Object.assign({}, order, { totalPrice }))}><span className="pricing-action">{useLang('Заказать')}</span></div>
                    </div>
                </div>
                <div className="rightone">
                    <div className="s3-total-header">{useLang('Ваша корзина', 'Your order', 'Wybrałeś')}:</div>
                    <div className="shady cart">
                        {order.products.map((p, index) => <CartItem config={config} discount={service0.addonDiscounts[p.serviceIndex]} onChange={patchProduct(index)} product={p} onDelete={index !== 0 && (() => onDelete(index))}/>)}
                        <div className="s3-cart-bottom">
                           <div className="total"> {useLang('Итого', 'Total', 'Razem')} : <span className='pricing-period'>{useLang(startsFromLang)}&nbsp;</span> ${totalPrice}</div>
                        </div>
                    </div>
                    </div>

            </div>
        </section>);
};
const CartItem = ({ config, product, onDelete, onChange, discount = 0 }) => {
    const [collapsed, setCollapsed] = React.useState(true);
    const service = config.services[product.serviceIndex];
    const pack = service.packs[product.packIndex];
    const info = getProductInfo(config);
    return (<div className={"s3-cart-item " + (collapsed ? 'collapsed' : '')}>
            <div className="s3-cart-item-header">
                <div className="planname">
                <div className="pricing-item-header">{useLang(service.name)}</div>
                <span>{useLang(packageLang)} {useLang(pack.name)}</span>
                </div>
                <div className="planprice"><span className='pricing-period'>{useLang(startsFromLang)}&nbsp;</span>${info.getBasePrice(product, discount)}
                    <div onClick={() => setCollapsed(!collapsed)} className={ collapsed ? 'fulltoggle active' : 'fulltoggle inactive'}>
                    <svg className="toggle-arrow" viewBox="0 0 1417.3 1417.3"><g><path class="st0" d="M1182.6,541.8c13.9,0,27.8,0,41.7,0c46.3,12.7,76.7,42.1,91.7,87.6c0,15.3,0,30.6,0,45.9 c-11.5,39.7-39.1,64.9-72.7,87c-147.2,97-293.6,195.2-440.2,293c-63.4,42.3-111.8,42.3-175.1,0c-146.7-97.8-293-196.1-440.2-293.1 c-33.6-22.1-61.4-47.1-72.8-86.9c0-15.3,0-30.6,0-45.9c15.1-45.4,45.5-74.8,91.7-87.6c13.9,0,27.8,0,41.7,0 c20.4,11.2,41.7,21.1,61,33.8c130.2,86.1,260.1,172.6,389.7,259.6c12.3,8.3,20.4,8.4,32.8,0.1c122-82.1,244.3-163.8,367-244.8 C1125.8,572.8,1154.6,558,1182.6,541.8z"></path></g></svg>
               </div>
                    {onDelete && <div className="deleteitem" onClick={onDelete}>

                    <svg viewBox="0 0 30 30">
		<path className="st0" d="M14.9,12.3c0.1-0.1,0.2-0.2,0.2-0.3c2.1-2.1,4.2-4.2,6.3-6.3c1.1-1.1,2.8-0.7,3.3,0.6
			c0.3,0.8,0.1,1.6-0.5,2.2c-2.1,2.1-4.2,4.2-6.2,6.2c-0.1,0.1-0.2,0.2-0.3,0.3c0.1,0.1,0.2,0.2,0.3,0.3c2.1,2.1,4.2,4.2,6.3,6.3
			c1.1,1.1,0.7,2.9-0.8,3.4c-0.8,0.3-1.5,0-2.1-0.5c-2.1-2.1-4.1-4.1-6.2-6.2c-0.1-0.1-0.2-0.2-0.3-0.4c-0.1,0.1-0.2,0.2-0.3,0.3
			c-2.1,2.1-4.2,4.2-6.3,6.3c-1.1,1.1-2.9,0.7-3.4-0.8c-0.3-0.8,0-1.5,0.5-2.1c2.1-2.1,4.2-4.2,6.2-6.2c0.1-0.1,0.2-0.2,0.3-0.3
			c-0.1-0.1-0.2-0.2-0.3-0.3c-2.1-2.1-4.2-4.2-6.3-6.3C4.8,7.9,4.6,6.8,5.2,6c0.7-1.1,2.2-1.2,3.1-0.3c1.3,1.3,2.6,2.6,3.9,3.9
			C13.1,10.5,14,11.4,14.9,12.3z"/>
</svg>

                </div>}
                </div>
            </div>
            <div className="item-details">
                <ul className='pricing-feature-list' dangerouslySetInnerHTML={createMarkup(useLang(pack.featureDescriptions))}>

                </ul>
                <div className="modules">
                <h3>{useLang(service.moduleLang)}</h3>
                <div className="modulescount">
                <span onClick={() => product.extraModules > 0 &&
        onChange({ extraModules: product.extraModules - 1 })}>-</span><span>{product.extraModules + pack.modules}</span><span onClick={() => onChange({ extraModules: product.extraModules + 1 })}>+

                            </span>
                    </div>
            </div>
            </div>
        </div>);
};
