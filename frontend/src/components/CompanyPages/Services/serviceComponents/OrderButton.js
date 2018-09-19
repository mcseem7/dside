import React, {Component} from 'react'
import DribbleButton from 'react-dribble-button';


export default function OrderButton(props) {

  return(
      <DribbleButton style={{
          width: '186px',
          height: '45px',
          zIndex: 1,
          marginTop: '500px',
          borderRadius: '29px',
          fontFamily: 'MontBold',
          fontSize: '0.8rem !important',
          backgroundColor: '#4c9a15 !important',
          backgroundImage: 'radial-gradient( ellipse at center, #8fde34 0%, rgba(85, 139, 47, 0) 60%, #407719 100% ) !important'
      }} className="order__wrap" color='light-green' onClick={() => {
        return props.handlePopup()
      }}>
          order now
      </DribbleButton>
  )
}

