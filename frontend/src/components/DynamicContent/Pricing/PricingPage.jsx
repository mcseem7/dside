import React, { Fragment } from 'react';
import pricesConfig, { getProductInfo, normalizePrice } from './config';
import ViewStack from './ViewStack';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ScrollAnimation from 'react-animate-on-scroll'
import Footer from '../../Basic/Footer';
import useLang, { getLang } from '../../../hooks/useLang';
import useMergeState from '../../../hooks/useMergeState';
import { tail } from 'ramda';
const getDefaultOrder = () => ({
    products: [
        {
            extraModules: 0,
            packIndex: 0,
            serviceIndex: 0,
        }
    ]
});
export default () => {
    const [order, setOrder] = useMergeState(getDefaultOrder());
    const [step, setStep] = React.useState(0);
    const info = getProductInfo(pricesConfig);
    const updateOrder = (value) => {
        console.log('updateOrder', value);
        setOrder(value);
        window.scrollTo(0,0);
    };
    const onStep1 = (updatedOrder) => {
        updateOrder(updatedOrder);
        window.scrollTo(0,0);
        setTimeout(function() {setStep(1);}, 1);
    };
    const onStep2 = (updatedOrder) => {
        updateOrder(updatedOrder);
        setStep(2);
    };
    const onStep3 = (updatedOrder) => {
        updateOrder(updatedOrder);
        setStep(0);
        fetch('https://mydside.com/api/' + getLang() + '/home/addOrder/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: updatedOrder.name,
                phone: updatedOrder.phone,
                totalprice: '$' + String(updatedOrder.totalPrice || '0') +
                    (updatedOrder.bill === 'periodic'
                        ? '($' + normalizePrice((updatedOrder.totalPrice / updatedOrder.term)) + ' per month)'
                        : updatedOrder.bill === 'check'
                            ? '($' + normalizePrice(updatedOrder.totalPrice / updatedOrder.count) + ' per check)'
                            : ''),
                bill: (updatedOrder.bill === 'check' ? String(updatedOrder.count || '0') : '0') + ' ',
                term: (updatedOrder.bill === 'periodic' ? String(updatedOrder.term || '0') : '0') + ' mon',
                pack: info.getText(updatedOrder.products[0]),
                addons: tail(updatedOrder.products).map(p => info.getText(p)).join(' , ') || 'No addons ',
                paymenttype: updatedOrder.bill === 'once' ? 'One time payment' : (updatedOrder.bill === 'periodic' ? 'Subscribtion' : 'Partnership'),
            }),
        }).then((s) => console.log('success', s)).catch((e) => console.log(e));
        alert(useLang('Ваш заказ успешно отправлен на обработку', 'Your order is on a way'));
        setOrder(getDefaultOrder());
    };
    return <Fragment>
        <div className="row">
            <div className="pricing__wrapper">
                <h2 className="">Шаг {step + 1}/3</h2>
            <h3 className=""></h3>
            <ViewStack value={step} data={[
        () => <ScrollAnimation animateIn="slideInUp" animateOnce="true" animateOut="fadeOutLeft"><Step1 onSubmit={onStep1} config={pricesConfig} order={order}/></ScrollAnimation>,
        () => <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" animateOut="fadeOutLeft"><Step2 onSubmit={onStep2} config={pricesConfig} order={order} onBack={() => setStep(0)}/></ScrollAnimation>,
        () => <Step3 onSubmit={onStep3} config={pricesConfig} order={order} onBack={() => setStep(0)}/>,
    ]}/>
            </div>
            </div>
            <Footer />
    </Fragment>;
};
