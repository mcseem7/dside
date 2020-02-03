import React from 'react';
import useLang from '../../../hooks/useLang';
import PacksList from './PacksList';
import scrollToComponent from 'react-scroll-to-component';
export const startsFromLang = {
    ru: 'от',
    pl: 'od',
    en: 'from',
};
export const orderLang = {
    ru: 'Выбрать',
    pl: 'Wybierz',
    en: 'Order',
};
export const removeLang = {
    ru: 'Удалить',
    pl: 'Usuń',
    en: 'Remove',
};
export const modulesLang = {
    ru: 'Модули',
    pl: 'Moduły',
    en: 'Modules',
};
export const packageLang = {
    ru: 'Пакет',
    pl: 'Pakiet',
    en: 'Package',
};
export default ({ config, onSubmit }) => {
    const [index, setIndex] = React.useState(undefined);
    const selectedSevice = config.services[index];
    const packs = selectedSevice ? selectedSevice.packs : [];
    return <section className="step-first step-container">
            <h3 className="subheader">{useLang('Выберите услугу', 'Select service', 'Wybierz usługu')}</h3>
            <div className="services-pricing-grid">
                {config.services.map((service, curIndex) => <div className={"services-pricing-item shady" + (index === curIndex ? 'activated' : '')}>
                            <div className="pricing-item-descr">
                                <div className="pricing-item-header"><span>{Number(curIndex + 1)}. </span>{useLang(service.name)}</div>
                                <div className="pricing-item-content">{useLang(service.description)}
                                </div>
                            </div>
                            <div className="pricing-item-controls">
                                <div className="pricing-item-price">
                                    <span>{useLang(startsFromLang)} </span>${service.packs[0].price}
                                </div>
                                <div onClick={() =>  {setIndex(curIndex); scrollToComponent(this.Prices, { offset: 0, align: 'top', duration: 1900})}} className="btn-send btn-calc"><span className="pricing-action">{useLang('Рассчитать', 'Calculate', 'Oblicz')}</span></div>
                            </div>
                        </div>)}
            </div><section className='prices' ref={(section) => { this.Prices = section; }}>
            {index !== undefined &&
         <section> <h3 className="subheader">{useLang('Выберите пакет', 'Select a package', 'Wybierz pakiet')}</h3><PacksList serviceIndex={index} config={config} onSelect={(packIndex) => onSubmit({
            products: [{
                    packIndex,
                    serviceIndex: index,
                    extraModules: 0,
                }]
        })}/></section>}</section>

    </section>;
};
