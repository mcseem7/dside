import React from 'react';
import useLang from '../../../hooks/useLang';
import PacksList from './PacksList';
export const startsFromLang = {
    ru: 'от',
    pl: 'от',
    en: 'from',
};
export const orderLang = {
    ru: 'Заказать',
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
    const [index, setIndex] = React.useState(0);
    const selectedSevice = config.services[index];
    const packs = selectedSevice.packs;
    return <section className="step-first step-container">
        <div className="pricing__wrapper">
            <div className="services-pricing-grid">
                {config.services.map((service, curIndex) => <div className={"services-pricing-item " + (index === curIndex ? 'activated' : '')} onClick={() => setIndex(curIndex)}>
                            <div className="pricing-item-descr">
                                <div className="pricing-item-header"><span>{Number(curIndex + 1)}. </span>{useLang(service.name)}</div>
                                <div className="pricing-item-content">{useLang(service.description)}
                                </div>
                            </div>
                            <div className="pricing-item-controls">
                                <div className="pricing-item-price">
                                    <span>{useLang(startsFromLang)} </span>${service.packs[0].price}
                                </div>
                                <div className="pricing-item-button pricing-palden"><span className="pricing-action">{useLang('Купить', 'Buy', 'Buy')}</span></div>
                            </div>
                        </div>)}
            </div>
            <PacksList serviceIndex={index} config={config} onSelect={(packIndex) => onSubmit({ products: [{
                packIndex,
                serviceIndex: index,
                extraModules: 0,
            }] })}/>
        </div>
    </section>;
};
