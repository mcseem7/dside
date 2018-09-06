import React, {Component} from 'react'
import DribbleButton from 'react-dribble-button';


export default function OrderButton(props) {

  return(
      <DribbleButton style={{
          width: '236px',
          height: '60px',
          zIndex: 1,
          marginTop: '500px',
          borderRadius: '29px',
          fontFamily: 'MontBold'
      }} className="order__wrap" color='light-green' onClick={() => {
        return props.handlePopup()
      }}>
          order now
      </DribbleButton>
  )
}

