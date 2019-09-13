import React, {Fragment} from 'react'
import pricesConfig, {getProductInfo, Order} from './config'
import ViewStack from './ViewStack'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Footer from '../../Basic/Footer'
import useLang, {getLang} from '../../../hooks/useLang'
import useMergeState from '../../../hooks/useMergeState'
import {tail} from 'ramda'



const getDefaultOrder = (): Order => ({
    products: [
        {
            extraModules: 0,
            packIndex: 0,
            serviceIndex: 0,
        }
    ]
})

type RequestBody = {
    name: string
    pack: string
    bill: string
    addons: string
}

export default () => {
    const [order, setOrder] = useMergeState(getDefaultOrder())
    const [step, setStep] = React.useState(0)

    const info = getProductInfo(pricesConfig)
    const updateOrder = (value: Order) => {
        console.log('updateOrder', value)
        setOrder(value)
    }

    const onStep1 = (updatedOrder: Order) => {
        updateOrder(updatedOrder)
        console.log('updateOrder step 1')
        setStep(1)
    }
    const onStep2 = (updatedOrder: Order) => {
        updateOrder(updatedOrder)
        setStep(2)

    }

    const onStep3 = (updatedOrder: Order) => {
        updateOrder(updatedOrder)
        setStep(0)


        fetch('https://mydside.com/api/' + getLang() + '/home/addOrder/',{
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
                        ? '($' + (updatedOrder.totalPrice/updatedOrder.term) +' per month)'
                        : updatedOrder.bill === 'check'
                            ? '($' + (updatedOrder.totalPrice/updatedOrder.count) +' per check)'
                                : ''),
                bill: (updatedOrder.bill === 'check' ? String(updatedOrder.count || '0') : '0') + ' ',
                term: (updatedOrder.bill === 'periodic' ? String(updatedOrder.term || '0') : '0' ) + ' mon',
                pack: info.getText(updatedOrder.products[0]),
                addons: tail(updatedOrder.products).map (p => info.getText(p)).join(' , ') || 'No addons ',
                paymenttype: updatedOrder.bill === 'once' ? 'One time payment' : ( updatedOrder.bill === 'periodic' ? 'Subscribtion' : 'Partnership'),

            }),
        }).then((s) => console.log('success', s)).catch((e) => console.log(e))
        alert(useLang('Ваш заказ успешно отправлен на обработку', 'Your order is on a way'))
    }

    return <Fragment>
            <ViewStack
                value={step}
                data={[

                    () =>
                          <Step1
                              onSubmit={onStep1}
                              config={pricesConfig}
                              order={order}
                          />,
                    () =>
                          <Step2 onSubmit={onStep2}
                                 config={pricesConfig}
                                 order={order}
                                 onBack={() => setStep(0)}
                          />,
                    () =>
                          <Step3
                              onSubmit={onStep3}
                              config={pricesConfig}
                              order={order}
                              onBack={() => setStep(0)}
                          />,
                ]}
            />
            <Footer/>
    </Fragment>
}