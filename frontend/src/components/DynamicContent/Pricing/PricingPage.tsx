import React from 'react'
import pricesConfig, {Order} from './config'
import ViewStack from './ViewStack'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'


export default () => {
    const [order, setOrder] = React.useState({serviceIndex: 0, packIndex: 0, addons: []} as Partial<Order>)
    const [step, setStep] = React.useState(0)

    const onStep1 = (order: {
        serviceIndex: number,
        packIndex: number
    }) => {
        setOrder(order)
        setStep(1)
    }
    const onStep2 = (updatedOrder: Partial<Order>) => {
        setOrder({...order, updatedOrder})
        setStep(2)

    }

    const onStep3 = (updatedOrder: Partial<Order>) => {
        setOrder({...order, updatedOrder})
        setStep(0)
    }
    return <ViewStack
        value={step}
        data={[

            () =>
                  <Step1 onSubmit={onStep1} config={pricesConfig} />,
            () =>
                  <Step2 onSubmit={onStep2} config={pricesConfig} packIndex={order.packIndex} serviceIndex={order.serviceIndex}  />,
            () =>
                  <Step3
                      onSubmit={onStep3}
                      config={pricesConfig}
                      value={order}
                  />,
        ]}
    />
}