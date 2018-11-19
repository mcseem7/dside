import React, {Component, Fragment} from 'react'
import './index.css'
import ReactDOM from 'react-dom'
import arrow from '../arrow.svg'
import { reactTranslateChangeLanguage, TranslateProvider } from "translate-components";
import Translate from 'translate-components'
import withPoppupHOC from '../Poppup/index'
import ErrorValidate from '../../components/ErrorValidate/'
import withLanguage from '../withLanguage/index'
import {compose} from 'recompose'


class OrderPoppup extends Component {
  constructor(props) {
    super(props)

    this.nameRef = React.createRef()
    this.phoneRef = React.createRef()
    this.state = {
      modalState: this.props.modalStatus,
      result: props.result
    }
  }

 

  componentWillReceiveProps(nextProps) {
    if(this.state.result != nextProps.result) {
      this.setState({result: nextProps.result})
    }

    if(this.state.modalState != nextProps.modalStatus) {
      this.setState({modalState: nextProps.modalStatus})
    }
  }

  componentDidUpdate() {
    reactTranslateChangeLanguage.bind(this, this.props.language)();
  }


  render() {
   
    return(
      <Fragment>
        <div class={`modal-overlay ${this.state.modalState ? 'active' : ''}`}>
          <div class={`modal  ${this.state.modalState ? 'active' : ''}`}>
{this.state.modalState ?   <Fragment> <a class="close-modal" onClick={() => {
  return  this.props.onClose()
}}>
  <svg viewBox="0 0 20 20">
    <path fill="#000000" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
  </svg>
</a>

<div class="modal-content">
  <div class="form-wrap">
    {this.state.result ?
   
      <div id="form-result">
        <h3 id="thanks"><Translate>Thank you! Application successfully submitted!</Translate></h3>
      </div> :  <div id="form-itself">
        <h3><Translate>Leave your phone number</Translate></h3>
          <p><Translate>And you will receive a free consultation on the question that interests you. Usually we call back
            within 30 seconds.
          </Translate></p>
          <form  onSubmit={
              (event) => {
              event.preventDefault(); 
              this.props.getSubmitForm(this.nameRef.current.value, this.phoneRef.current.value)
            }} id="request-form" className='request-form_order' method="post" autocomplete="off">
            

            <div className='holder__wrapper' >
              <label for="id_subject">Имя:</label>
              <div class="holder__poppup holder__poppup-name"><Translate>Name</Translate></div>
              <input  ref={this.nameRef}  id="id_name" maxlength="50" minlength="2" name="name" required="required" type="text" />
            </div>
            <div className='holder__wrapper'>
              <label for="id_sender">Телефон:</label>
              <div class="holder__poppup holder__poppup-phone"><Translate>Phone number (With country code)</Translate></div>
              <input   pattern="^\+[1-9]{1}[0-9]{3,14}$"  ref={this.phoneRef} id="id_phone" maxlength="50" minlength="6" name="phone" required="required" type="tel" />
            </div>
            <button class="button14" type='submit' ><Translate>Send</Translate><img src={arrow} alt="" /></button>
          </form>
        </div>
    }
  </div>
</div></Fragment> : null}
          
          </div>
        </div>
    
      </Fragment>
    )
  }

}




export default compose(
  withLanguage,
 withPoppupHOC
)(OrderPoppup, '/home/addOrder/', 'ORDER')