import React, { Component, Fragment } from 'react'
import './index.css'
import ReactDOM from 'react-dom'
import { reactTranslateChangeLanguage, TranslateProvider } from "translate-components";
import Translate from 'translate-components'
import withPoppupHOC from '../Poppup/index'
import ReCAPTCHA from "react-google-recaptcha";
import arrow from '../arrow.svg'
import withLanguage from '../withLanguage'
import { compose } from 'recompose'
import Cookies from 'js-cookie';

class GradePoppup extends Component {
  constructor(props) {
    super(props)
    this.recaptchaRef = React.createRef();
    this.nameRef = React.createRef()
    this.emailRef = React.createRef()
    this.socialRef = React.createRef()
    this.textGradeRef = React.createRef()
    this.titleRef = React.createRef()
    this.imageRef = React.createRef()

    this.state = {
      modalState: this.props.modalStatus,
      result: false,
      isVerified: false,
      imgSrc: null,
      response: null
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.result != nextProps.result) {
      this.setState({ result: nextProps.result })
    }

    if (this.state.modalState != nextProps.modalStatus) {
      this.setState({ modalState: nextProps.modalStatus })
    }
  }

  handleSubscribe = () => {
    if (!this.state.isVerified) {
      alert('Please verify that you are a human!');
    } else {
      return false;
    }
  }

  verifyCallback = (response) => {
    if (response) {
      this.setState({
        isVerified: true,
        response
      })
    }
  }

  getImage = (event) => {
    event.preventDefault();
    this.setState({ imgSrc: event.target.files[0] }, () => {
      console.log(this.state.imgSrc)
    })
  }

  componentDidUpdate() {
    reactTranslateChangeLanguage.bind(this, this.props.language)();
  }


  addGrade = async () => {
    const formData = await new FormData();
    formData.append('image', this.state.imgSrc);
    formData.append('name', this.nameRef.current.value)
    formData.append('email', this.emailRef.current.value)
    formData.append('social_link', this.socialRef.current.value)
    formData.append('title', this.titleRef.current.value)
    formData.append('text', this.textGradeRef.current.value)
    await  this.handleSubscribe()
    await fetch(`${process.env.REACT_APP_API}/${this.props.language}/review/createReviewRequest/`, {
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      body: formData
    }).then((response) => {
      if (response.status >= 400) {
        throw new Error()
      } else {
        this.setState({ result: true });
      }
    })

  }

  render() {
    return (
      <Fragment>
        <div class={`modal-overlay ${this.state.modalState ? 'active' : ''}`}>
          <div style={{
            minHeight: '40rem'
          }} class={`modal  ${this.state.modalState ? 'active' : ''}`}>
            {this.state.modalState ? <Fragment>
              <a class="close-modal" onClick={() => {
                return this.props.onClose()
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
                    </div> : <div id="form-itself">
                      <h3><Translate>Add your idea for a review!</Translate></h3>
                      <p><Translate>We will publish a detailed review for your proposal.</Translate></p>
                      <form  onSubmit={(event) => {
                        event.preventDefault(); this.addGrade(
                          this.nameRef,
                          this.emailRef,
                          this.socialRef,
                          this.textGradeRef,
                          this.titleRef,
                          this.state.imgSrc
                        )
                      }} id="request-form" className='request-form_grade' method="post"  autocomplete="off">

                        <div className='holder__wrapper'>
                          <div class="holder__poppup holder__poppup-name"><Translate>review name</Translate></div>
                          <input ref={this.nameRef} id="id_name" maxlength="50" minlength="3" name="name" required="required" type="text" />
                        </div>
                        <div className='holder__wrapper'>
                          <div class="holder__poppup holder__poppup-email"><Translate>email</Translate></div>
                          <input ref={this.emailRef} id="id_email" maxlength="50" minlength="3" name="email" required="required" type="email" />
                        </div>
                        <div className='holder__wrapper'>
                          <div class="holder__poppup holder__poppup-social"><Translate>Social Link (with https://)</Translate></div>
                          <input ref={this.socialRef} id="id_social" maxlength="50" minlength="3" name="social" required="required" type="text" />
                        </div>
                        <div className='holder__wrapper'>
                          <div class="holder__poppup holder__poppup-text"><Translate>review description</Translate></div>
                          <input ref={this.textGradeRef} id="id_text" maxlength="50" minlength="3" name="grade" required="required" type="text" />
                        </div>
                        <div className='holder__wrapper'>
                          <div class="holder__poppup holder__poppup-title"><Translate>review title</Translate></div>
                          <input ref={this.titleRef} id="id_title" maxlength="50" minlength="2" name="title" required="required" type="text" />
                        </div>
                        <div className='workUpload'>
                          <label for="file"><Translate>Choose your work to upload</Translate></label>
                          <input onChange={(event) => this.getImage(event)} ref={this.imageRef} id="id_image" name="image" required="required" type="file" />
                        </div>
                        <div id='recaptcha'>
                          <ReCAPTCHA sitekey="6LdzjGEUAAAAAEoMUOiBnROqE0FRL6kQIcVJl08O"
                            ref={this.recaptchaRef}
                            render="explicit"
                            onChange={this.verifyCallback} />
                        </div>
                        <button class="button14" type='submit' ><Translate>Send</Translate><img src={arrow} alt="" /></button>
                      </form>
                    </div>
                  }

                </div>

              </div>
            </Fragment> : null}
          </div>
        </div>
      </Fragment>
    )
  }

}

export default compose(withLanguage,
  withPoppupHOC)(GradePoppup)


