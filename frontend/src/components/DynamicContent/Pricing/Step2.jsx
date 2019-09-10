"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var config_1 = require("./config");
var useLang_1 = require("../../../hooks/useLang");
exports.default = (function (_a) {
    var onSubmit = _a.onSubmit, packIndex = _a.packIndex, serviceIndex = _a.serviceIndex, config = _a.config;
    var pack = config.services[serviceIndex].packs[packIndex];
    return <section className="step-second">
        <div className="steptwo-container">
            <div className="leftone">
                <div className="stepper">Шаг 2/3</div>
                <div className="step2-header">Ваш выбор:</div>
                <div className="planitem">
                    <div className="itemshort">
                        <div className="planname"><div className="pricing-item-header">Landing</div>Пакет <span>Elite</span></div>
                        <div className="planprice">от $231 <button>Less</button><button>Remove</button></div>
                    </div>
                    <div className="item-details">
                        <ul className='pricing-feature-list' dangerouslySetInnertHTML={config_1.createMarkup(useLang_1.default(pack.featureDescriptions))}>

                        </ul>
                        <div className="modules">
                            <h3>Модули</h3>
                            <span>-</span>
                                9
                            <span>+</span>
                        </div>
                    </div>
                </div>
                <div className="planitem collapsed">
                    <div className="itemshort">
                        <div className="planname"><div className="pricing-item-header">Logo</div>Пакет <span>Elite</span></div>
                        <div className="planprice">от $431 <button>More</button><button>Remove</button></div>
                    </div>
                    <div className="item-details">
                        <ul className='pricing-feature-list'>
                        </ul>
                        <div className="modules"><h3>Модули</h3><span>-</span>7<span></span>+</div>
                    </div>
                </div>
                <div className="bottom-step2">
                    <div className="total">Всего: $111</div>
                    <div className="pricing-item-button pricing-palden"><span className="pricing-action">Button</span></div>
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
                        <div className="pricing-item-button pricing-palden"><span className="pricing-action">Button</span></div>
                    </div>
                </div>
                <div className="services-pricing-item">
                    <div className="pricing-item-descr">
                        <div className="pricing-item-header"><span>01. </span>Logo</div>
                        <div className="pricing-item-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                    <div className="pricing-item-controls">
                        <div className="pricing-item-price"><span>от </span>$240</div>
                        <div className="pricing-item-button pricing-palden"><span className="pricing-action">Button</span></div>
                    </div>
                </div>


            </div>
        </div>
    </section>;
});
