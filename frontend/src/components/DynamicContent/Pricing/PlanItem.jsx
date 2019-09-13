import React from 'react';
import useLang from '../../../hooks/useLang';
import { lessLang, moreLang, packageLang, removeLang } from './Step1';
import { createMarkup, getProductInfo } from './config';
export default ({ config, product, onDelete, index, onChange }) => {
    const [collapsed, setCollapsed] = React.useState(index === 0 ? false : true);
    const service = config.services[product.serviceIndex];
    const pack = service.packs[product.packIndex];
    const info = getProductInfo(config);
    return <div className={"planitem " + (collapsed ? 'collapsed' : '')}>
        <div className="itemshort">
            <div className="planname">
                <div className="pricing-item-header">{useLang(service.name)}</div>
                {useLang(packageLang)}
                <span>{useLang(pack.name)}</span>
            </div>
            <div className="planprice">${info.getBasePrice(product)}
                <button onClick={() => setCollapsed(!collapsed)}>{useLang((collapsed ? moreLang : lessLang))}</button>
                <button onClick={onDelete}>{useLang(removeLang)}</button>
            </div>
        </div>
        <div className="item-details">
            <ul className='pricing-feature-list' dangerouslySetInnerHTML={createMarkup(useLang(pack.featureDescriptions))}>

            </ul>
            <div className="modules">
                <h3>{useLang(service.moduleLang)}</h3>
                <span onClick={() => product.extraModules > 0 &&
        onChange({ extraModules: product.extraModules - 1 })}>-</span>{product.extraModules + pack.modules}<span onClick={() => onChange({ extraModules: product.extraModules + 1 })}>+

                            </span>
            </div>
        </div>
    </div>;
};
