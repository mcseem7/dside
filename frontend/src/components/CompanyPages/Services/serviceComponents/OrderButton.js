import React, {Component} from 'react'
import DribbleButton from 'react-dribble-button';



export default function OrderButton() {

  return(
      <div className="order__wrap">
      <DribbleButton color="light-green"  style={{
        width: '338px',
        height: '68px',
        borderRadius: '30px',
        fontFamily: 'MontBold'
      }} animationDuration={1000} >
        Order now!
      </DribbleButton>
      </div>
  )
}

