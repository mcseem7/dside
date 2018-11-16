import React, {Component} from 'react'
import DribbleButton from 'react-dribble-button';
import Translate from 'translate-components'

export default function OrderButton(props) {

  return(
      <DribbleButton style={{
          zIndex: 1,
          marginTop: '500px',
          borderRadius: '40px',
          fontFamily: 'MontBold',
          fontSize: '0.8rem !important',
          backgroundColor: '#4c9a15 !important',
          backgroundImage: 'radial-gradient( ellipse at center, #8fde34 0%, rgba(85, 139, 47, 0) 60%, #407719 100% ) !important'
      }} className="order__wrap" color='light-green' onClick={() => {
        return props.handlePopup()
      }}>
        <Translate>order now</Translate>
      </DribbleButton>
  )
}

