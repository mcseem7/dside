import React, {Component} from 'react'
import DribbleButton from 'react-dribble-button';



export default function OrderButton(props) {

  return(
      <div className="order__wrap" onClick={() => {
        return props.handlePopup()
      }}>
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

