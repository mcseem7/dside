"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var config_1 = require("./config");
var useLang_1 = require("../../../hooks/useLang");
var startsFrom = {
    ru: 'от',
    pl: 'от',
    en: 'from',
};
var orderLang = {
    ru: 'Заказать',
    pl: 'Заказать',
    en: 'Order',
};
var packSvgs = [
    <svg className='pricing-deco-img' enable-background='new -558 659.3  300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='-558 659.3  300 100' width='300px' x='0px' y='0px'>
        <path className='deco-layer deco-layer--4' d='M-585.3,700.6c0,0,218.4,52.6,370.4-16v84.3h-369.9L-585.3,700.6z' fill='#FFF'></path>
    </svg>,
    <svg className='pricing-deco-img' enable-background='new -558 659.3  300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='-558 659.3  300 100' width='300px' x='0px' y='0px'>
        <path className='deco-layer deco-layer--1' d='M-584.7,657.4c0,0,168,74.4,370.4,50.5v61.3h-370.4V657.4z' fill='#058EEA' opacity='0.1'></path>
        <path className='deco-layer deco-layer--3' d='M-214.3,640.9c0,0-168,90.6-370.4,66.8v61.3h370.4V640.9z' fill='#2E2950' opacity='0.05'></path>
        <path className='deco-layer deco-layer--4' d='M-585.3,700.6c0,0,218.4,52.6,370.4-16v84.3h-369.9L-585.3,700.6z' fill='#FFF'></path>
    </svg>,
    <svg className='pricing-deco-img' enable-background='new -558 659.3  300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='-558 659.3  300 100' width='300px' x='0px' y='0px'>
        <path className='deco-layer deco-layer--1' d='M-584.7,657.4c0,0,168,74.4,370.4,50.5v61.3h-370.4V657.4z' fill='#058EEA' opacity='0.7'></path>
        <path className='deco-layer deco-layer--3' d='M-214.3,640.9c0,0-168,90.6-370.4,66.8v61.3h370.4V640.9z' fill='#3a416f' opacity='0.8'></path>
        <path className='deco-layer deco-layer--4' d='M-585.3,700.6c0,0,218.4,52.6,370.4-16v84.3h-369.9L-585.3,700.6z' fill='#FFF'></path>
    </svg>,
    <svg className='pricing-deco-img' enable-background='new -558 659.3  300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='-558 659.3  300 100' width='300px' x='0px' y='0px'>
        <linearGradient id="MyGradient">
            <stop offset="0%" stop-color="#2d3356"/>
            <stop offset="50%" stop-color="#2f3558"/>
            <stop offset="100%" stop-color="#2d3356"/>
        </linearGradient>
        <path className='deco-layer deco-layer--1' d='M-584.7,657.4c0,0,168,74.4,370.4,50.5v61.3h-370.4V657.4z' fill='#058EEA' opacity='0.7'></path>
        <path className='deco-layer deco-layer--3' d='M-214.3,640.9c0,0-168,90.6-370.4,66.8v61.3h370.4V640.9z' fill='#211F3D' opacity='0.5'></path>
        <path className='deco-layer deco-layer--2' d='M-584.7,698.6c0,0,227.7,52.6,379.8-16v84.3h-379.9L-584.7,698.6z' fill='#C57762'></path>
        <path className='deco-layer deco-layer--4 wow' d='M-585.3,700.6c0,0,218.4,52.6,370.4-16v84.3h-369.9L-585.3,700.6z' fill='#2E2950'></path>
    </svg>
];
exports.default = (function (_a) {
    var config = _a.config, onSubmit = _a.onSubmit;
    var _b = react_1.default.useState(0), index = _b[0], setIndex = _b[1];
    var selectedSevice = config.services[index];
    return <section className="step-first">
        <div className="pricing__wrapper">
            <div className="services-pricing-grid">
                {config.services.map(function (service, index) {
        return <div className="services-pricing-item" onClick={function () { return setIndex(index); }}>
                            <div className="pricing-item-descr">
                                <div className="pricing-item-header"><span>{Number(index + 1)}. </span>{useLang_1.default(service.name)}</div>
                                <div className="pricing-item-content">{useLang_1.default(service.description)}
                                </div>
                            </div>
                            <div className="pricing-item-controls">
                                <div className="pricing-item-price">
                                    <span>{useLang_1.default(startsFrom)} </span>${service.packs[0].price}
                                </div>
                                <div className="pricing-item-button pricing-palden"><span className="pricing-action">Button</span></div>
                            </div>
                        </div>;
    })}
            </div>
            <div className='pricing pricing-palden'>
                {selectedSevice.packs.map(function (pack, packIndex) {
        return <div className={'pricing-item ' + (packIndex === 3) ? 'elite' : ''}>
                            <div className={'pricing-deco' + (packIndex === 3) ? 'elite' : ''}>
                                {packSvgs[index]}
                                <div className='pricing-price'><span className='pricing-period'>{useLang_1.default(startsFrom)}</span><span className='pricing-currency'>$</span>{pack.price}
                                </div>
                                <h3 className='pricing-title lite'>{useLang_1.default(pack.name)}</h3>
                                <button className='pricing-action trans' onClick={function () {
            return onSubmit({ packIndex: packIndex, serviceIndex: index });
        }}>{useLang_1.default(orderLang)}</button>
                            </div>
                            <ul className='pricing-feature-list' dangerouslySetInnerHTML={config_1.createMarkup(useLang_1.default(pack.featureDescriptions))}>
                            </ul>
                        </div>;
    })}
            </div>
        </div>
    </section>;
});
