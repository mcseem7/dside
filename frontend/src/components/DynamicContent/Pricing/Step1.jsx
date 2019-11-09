import React from 'react';
import useLang from '../../../hooks/useLang';
import PacksList from './PacksList';
import ScrollAnimation from 'react-animate-on-scroll'
import scrollToComponent from 'react-scroll-to-component';
export const startsFromLang = {
    ru: 'от',
    pl: 'от',
    en: 'from',
};
export const orderLang = {
    ru: 'Выбрать',
    pl: 'Заказать',
    en: 'Order',
};
export const moreLang = {
    ru: 'Больше',
    pl: 'Больше',
    en: 'More',
};
export const lessLang = {
    ru: 'Меньше',
    pl: 'Меньше',
    en: 'Less',
};
export const removeLang = {
    ru: 'Удалить',
    pl: 'Удалить',
    en: 'Remove',
};
export const modulesLang = {
    ru: 'Модули',
    pl: 'Модули',
    en: 'Modules',
};
export const packageLang = {
    ru: 'Пакет',
    pl: 'Пакет',
    en: 'Package',
};
export default ({ config, onSubmit }) => {
    const [index, setIndex] = React.useState(undefined);
    const selectedSevice = config.services[index];
    const packs = selectedSevice ? selectedSevice.packs : [];
    return <section className="step-first step-container">
            <div className="services-pricing-grid">
                {config.services.map((service, curIndex) => <div className={"services-pricing-item " + (index === curIndex ? 'activated' : '')}>
                            <div className="pricing-item-descr">
                                <div className="pricing-item-header"><span>{Number(curIndex + 1)}. </span>{useLang(service.name)}</div>
                                <div className="pricing-item-content">{useLang(service.description)}
                                </div>
                            </div>
                            <div className="pricing-item-controls">
                                <div className="pricing-item-price">
                                    <span>{useLang(startsFromLang)} </span>${service.packs[0].price}
                                </div>
                                <div onClick={() =>  {setIndex(curIndex); scrollToComponent(this.Prices, { offset: 0, align: 'top', duration: 1900})}} className="pricing-item-button pricing-palden"><span className="pricing-action">{useLang('Рассчитать', 'Buy', 'Buy')}</span></div>
                            </div>
                        </div>)}
            </div><section className='prices' ref={(section) => { this.Prices = section; }}>
            {index !== undefined &&
         <section> <ScrollAnimation animateIn="slideInUp" delay="300"><h3 className="">Выберите пакет</h3><PacksList serviceIndex={index} config={config} onSelect={(packIndex) => onSubmit({
            products: [{
                    packIndex,
                    serviceIndex: index,
                    extraModules: 0,
                }]
        })}/></ScrollAnimation></section>}</section>

    </section>;
};
