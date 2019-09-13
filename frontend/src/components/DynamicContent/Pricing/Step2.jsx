import React from 'react';
import { getProductInfo, useDiscount } from './config';
import useLang from '../../../hooks/useLang';
import { startsFromLang } from './Step1';
import { clone, remove } from 'ramda';
import PlanItem from './PlanItem';
import PacksList from './PacksList';
import PopUp from './PopUp';
export const stepLang = {
    ru: 'Шаг',
    pl: 'Шаг',
    en: 'step',
};
export const choiceLang = {
    ru: 'Ваш выбор',
    pl: 'Ваш выбор',
    en: 'You choice',
};
export const nextLang = {
    ru: 'Далее',
    pl: 'Далее',
    en: 'Next',
};
export default (props) => {
    const config = props.config;
    const onSubmit = props.onSubmit;
    const [modalServiceList, setModalServiceList] = React.useState(undefined);
    const [order, setOrder] = React.useState(props.order);
    console.log('step two order', order);
    const patchOrder = (patch) => setOrder(Object.assign({}, order, patch));
    const mainService = config.services[props.order.products[0].serviceIndex];
    const patchProduct = (index) => (product) => {
        const newOrder = clone(order);
        newOrder.products[index] = Object.assign({}, newOrder.products[index], product);
        setOrder(newOrder);
    };
    const productInfo = getProductInfo(config);
    const totalPrice = order.products.reduce((sum, product) => {
        console.log(product, productInfo.getBasePrice(product), mainService.addonDiscounts[product.serviceIndex], config);
        const productPrice = productInfo.getBasePrice(product, mainService.addonDiscounts[product.serviceIndex] || 0);
        return productPrice + sum;
    }, 0);
    const addProduct = (packIndex) => {
        const newOrder = clone(order);
        newOrder.products = [...order.products, { extraModules: 0, serviceIndex: modalServiceList, packIndex }];
        setOrder(newOrder);
        setModalServiceList(undefined);
    };
    return <section className="step-second step-container">
        <div className="steptwo-container">
                <div className="leftone">
                    <div className="stepper">{useLang(stepLang)} 2/3</div>
                    <div className="step2-header">{useLang(choiceLang)}:</div>
                    {order.products.map((product, index) => <PlanItem config={config} product={product} index={index} discount={mainService.addonDiscounts[product.serviceIndex] || 0} onChange={patchProduct(index)} onDelete={(index !== 0) ? (() => {
        setOrder(Object.assign({}, order, { products: remove(index, 1, order.products) }));
    }) : null}/>)}

                    <div className="bottom-step2">
                        <div className="total">{useLang('Итого', 'Total', 'Итого')}: ${totalPrice}</div>
                        <div className="pricing-item-button pricing-palden" onClick={() => onSubmit(order)}>
                            <span className="pricing-action">
                                {useLang(nextLang)}
                            </span>
                        </div>
                    </div>
                </div>
            <div className="rightone">
                {mainService.addonIndicies.map(index => config.services[index]).map((service, index) => {
        const discount = mainService.addonDiscounts[service.serviceIndex];
        return <div className="services-pricing-item" style={order.products.find(p => p.serviceIndex === service.serviceIndex) ? { opacity: 0.5 } : {}}>
                                <div className="pricing-item-descr">
                                    <div className="pricing-discount-header">
                                        <div className="pricing-item-header">
                                            <span>{index + 1}. </span>{useLang(service.name)}</div>
                                        {discount && <div className="discount">-{mainService.addonDiscounts[service.serviceIndex]}%</div>}
                                    </div>
                                    <div className="pricing-item-content">{useLang(service.description)}</div>
                                </div>
                                <div className="pricing-item-controls">
                                    <div className="pricing-item-price">
                                        {discount
            ? [
                <div className="oldprice">${service.packs[0].price}</div>,
                <span>{useLang(startsFromLang)} </span>,
                <span>{useDiscount(discount, service.packs[0].price)}</span>, ,
            ]
            : [<span>{useLang(startsFromLang)} </span>, <span>{service.packs[0].price}</span>]}
                                        

                                    </div>
                                    <div className="pricing-item-button pricing-palden" onClick={order.products.find(p => p.serviceIndex === service.serviceIndex)
            ? null
            : (() => setModalServiceList(service.serviceIndex))}>
                                        <span className="pricing-action">{useLang('Добавить', 'Add', 'Add')}</span>
                                    </div>
                                </div>
                            </div>;
    })}

            </div>
                <PopUp modalState={modalServiceList !== undefined} onClose={() => setModalServiceList(undefined)}>
                    {modalServiceList !== undefined && <PacksList config={config} serviceIndex={modalServiceList} onSelect={addProduct} isPopUp discount={mainService.addonDiscounts[modalServiceList] || 0}/>}

                </PopUp>

        </div>
    </section>;
};
