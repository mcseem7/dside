import React, {Component, Fragment} from 'react'
import './index.css'
import { reactTranslateChangeLanguage, TranslateProvider } from "translate-components";
import Translate from 'translate-components'

 export  default  class Poppup extends Component {
  constructor(props) {
    super(props)
    this.nameRef = React.createRef()
    this.phoneRef = React.createRef()
    this.state = {
      modalState: this.props.modalStatus,
      result: false
    }
  }



  componentDidMount() {
    reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
  }



  handleSubmit = async(event) => {
    event.preventDefault()
    await fetch(`//dside.pl/api/en/home/addOrder/`, {
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       method: "POST",
       body: JSON.stringify({name: this.nameRef.current.value, phone: this.phoneRef.current.value, data: new Date().toISOString() })
     })
    await  this.setState({result: true})
   }

  render() {

    return(
      <Fragment>
        <div class={`modal-overlay active`}>
          <div class={`modal  active`}>

            <a class="close-modal" href="#" onClick={() => {
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
                      <form  onSubmit={this.handleSubmit} id="request-form" method="post" autocomplete="off">
                        <input type="hidden" name="csrfmiddlewaretoken" value="16en0jPOOddfSpZ8FAdslU61aXFCtePx" />

                        <div>
                          <label for="id_subject">Имя:</label>

                          <input ref={this.nameRef} id="id_name" maxlength="50" minlength="3" name="name" placeholder="name" required="required" type="text" />
                        </div>
                        <div>
                          <label for="id_sender">Телефон:</label>

                          <input   ref={this.phoneRef} id="id_phone" maxlength="50" minlength="6" name="phone" placeholder="phone" required="required" type="tel" />
                        </div>
                        <button type="submit" class="button14"  ><Translate>Send</Translate></button>
                      </form>
                    </div>
                }

              </div>

            </div>

          </div>
        </div>
      </Fragment>
    )
  }

}



