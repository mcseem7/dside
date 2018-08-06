import React, {Component, Fragment} from 'react'
import './index.css'

export default class Poppup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalState: this.props.modalStatus,
      result: false
    }
  }


  changeResult = (event) => {
    event.preventDefault()
    this.setState({result: !this.state.result})
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
                    <h3 id="thanks">Cпасибо!
                      <span>Заявка успешно отправлена!</span></h3>
                  </div> : null
                }
                <div id="form-itself">
                  <h3 >Оставьте Ваш номер телефона</h3>
                  <p >И Вы получите бесплатную консультацию по интересующему Вас вопросу. Обычно мы перезваниваем в течении 30 секунд.</p>
                  <form  id="request-form" method="post" autocomplete="off">
                    <input type="hidden" name="csrfmiddlewaretoken" value="16en0jPOOddfSpZ8FAdslU61aXFCtePx" />

                      <div>
                        <label for="id_subject">Имя:</label>

                        <input id="id_name" maxlength="50" minlength="3" name="name" placeholder="Имя" required="required" type="text" />
                      </div>
                      <div>
                        <label for="id_sender">Телефон:</label>

                        <input id="id_phone" maxlength="50" minlength="6" name="phone" placeholder="Телефон" required="required" type="tel" />
                      </div>
                      <input type="submit" onClick={this.changeResult} class="button14" value="Отправить" />
                  </form>
                </div>
              </div>

            </div>

          </div>
        </div>
      </Fragment>
    )
  }

}