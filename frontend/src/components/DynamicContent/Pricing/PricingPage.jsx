import React, { Fragment } from 'react';
import pricesConfig from './config';
import ViewStack from './ViewStack';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Footer from '../../Basic/Footer';
import useLang from '../../../hooks/useLang';
export default () => {
    const [order, setOrder] = React.useState({ serviceIndex: 0, packIndex: 0, addons: [] });
    const [step, setStep] = React.useState(0);
    const onStep1 = (order) => {
        setOrder(order);
        setStep(1);
    };
    const onStep2 = (updatedOrder) => {
        setOrder(Object.assign({}, order, updatedOrder));
        setStep(2);
    };
    const onStep3 = (updatedOrder) => {
        setOrder(Object.assign({}, order, updatedOrder));
        setStep(0);
        alert(useLang('Ваш заказ успешно отправлен на обработку', 'Your order is on a way'));
    };
    return <Fragment>
            <ViewStack value={step} data={[
        () => <Step1 onSubmit={onStep1} config={pricesConfig}/>,
        () => <Step2 onSubmit={onStep2} config={pricesConfig} packIndex={order.packIndex} serviceIndex={order.serviceIndex}/>,
        () => <Step3 onSubmit={onStep3} config={pricesConfig} value={order}/>,
    ]}/>
            <Footer />
    </Fragment>;
};
