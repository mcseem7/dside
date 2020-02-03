import React from 'react';
import useLang from '../../../hooks/useLang';
import {  packageLang, removeLang } from './Step1';
import { createMarkup, getProductInfo } from './config';
export default ({ config, product, onDelete, index, discount = 0, onChange }) => {
    const [collapsed, setCollapsed] = React.useState(index === 0 ? false : true);
    const service = config.services[product.serviceIndex];
    const pack = service.packs[product.packIndex];
    const info = getProductInfo(config);
    return <div className={"planitem " + (collapsed ? 'collapsed' : '')}>
        <div className="itemshort">

            <div className="planname">
                <div className="pricing-item-header">{useLang(service.name)}</div>
                <span>{useLang(packageLang)} {useLang(pack.name)}</span>
            </div>
            <div className="planprice">${info.getBasePrice(product, discount)}
                <div onClick={() => setCollapsed(!collapsed)} className={ collapsed ? 'fulltoggle active' : 'fulltoggle inactive'}>

                    <svg className="toggle-arrow" viewBox="0 0 1417.3 1417.3"><g><path class="st0" id="XMLID_22_" d="M1182.6,541.8c13.9,0,27.8,0,41.7,0c46.3,12.7,76.7,42.1,91.7,87.6c0,15.3,0,30.6,0,45.9 c-11.5,39.7-39.1,64.9-72.7,87c-147.2,97-293.6,195.2-440.2,293c-63.4,42.3-111.8,42.3-175.1,0c-146.7-97.8-293-196.1-440.2-293.1 c-33.6-22.1-61.4-47.1-72.8-86.9c0-15.3,0-30.6,0-45.9c15.1-45.4,45.5-74.8,91.7-87.6c13.9,0,27.8,0,41.7,0 c20.4,11.2,41.7,21.1,61,33.8c130.2,86.1,260.1,172.6,389.7,259.6c12.3,8.3,20.4,8.4,32.8,0.1c122-82.1,244.3-163.8,367-244.8 C1125.8,572.8,1154.6,558,1182.6,541.8z"></path></g></svg>

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
    </div>;
};
