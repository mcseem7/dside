import React, { Fragment } from 'react';
import pricesConfig from './config';
import ViewStack from './ViewStack';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Footer from '../../Basic/Footer';
import useLang, { getLang } from '../../../hooks/useLang';
import useMergeState from '../../../hooks/useMergeState';
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
    const updateOrder = (value) => {
        console.log('updateOrder', value);
        setOrder(value);
    };
    const onStep1 = (updatedOrder) => {
        updateOrder(updatedOrder);
        console.log('updateOrder step 1');
        setStep(1);
    };
    const onStep2 = (updatedOrder) => {
        updateOrder(updatedOrder);
        setStep(2);
    };
    const onStep3 = (updatedOrder) => {
        updateOrder(updatedOrder);
        setStep(0);
        fetch({ url: '/api/' + getLang() + '/home/addOrder', method: 'post',
            body: JSON.stringify(updatedOrder) });
        alert(useLang('Ваш заказ успешно отправлен на обработку', 'Your order is on a way'));
    };
    return <Fragment>
            <ViewStack value={step} data={[
        () => <Step1 onSubmit={onStep1} config={pricesConfig} order={order}/>,
        () => <Step2 onSubmit={onStep2} config={pricesConfig} order={order} onBack={() => setStep(0)}/>,
        () => <Step3 onSubmit={onStep3} config={pricesConfig} order={order} onBack={() => setStep(0)}/>,
    ]}/>
            <Footer />
    </Fragment>;
};
