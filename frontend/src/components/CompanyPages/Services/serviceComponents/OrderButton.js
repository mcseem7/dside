import React, {Component} from 'react'



export default function OrderButton(props) {

  return(
      <div className="order__wrap" onClick={() => {
        return props.handlePopup()
      }}>
          меня зовут кнопка
      {/*\*/}
      </div>
  )
}

