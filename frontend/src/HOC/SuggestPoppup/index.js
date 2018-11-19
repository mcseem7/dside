import React, {Component, Fragment} from 'react'
import './index.css'
import { reactTranslateChangeLanguage, TranslateProvider } from "translate-components";
import Translate from 'translate-components'
import withPoppupHOC from '../Poppup/index'

class SuggestPoppup extends Component {
    constructor(props) {
        super(props)

        this.nameRef = React.createRef()
        this.emailRef = React.createRef()
        this.socialRef = React.createRef()
        this.topicRef = React.createRef()

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

    render() {
     
        return(
            <Fragment>
                <div class={`modal-overlay ${this.state.modalState ? 'active' : ''}`}>
          <div class={`modal  ${this.state.modalState ? 'active' : ''}`}>

{this.state.modalState ? <Fragment>
               <a class="close-modal"  onClick={() => {
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
                                        <h3><Translate>Add your proposal for the new post!</Translate></h3>
                                        <p><Translate>We publish a post on your topic within three days after your application.</Translate></p>
                                        <form onSubmit={(event) => this.props.getSubmitForm(event, this.nameRef, this.emailRef, this.socialRef, this.topicRef)}   id="request-form" className='request-form_blog' method="post" autocomplete="off">
                                            <input type="hidden" name="csrfmiddlewaretoken" value="16en0jPOOddfSpZ8FAdslU61aXFCtePx" />

                                            <div>
                                                <div class="holder__poppup holder__poppup-name"><Translate>post name</Translate></div>
                                                <input ref={this.nameRef} id="id_name" maxlength="50" minlength="2" name="name"  required="required" type="text" />
                                            </div>
                                            <div>
                                                 <div class="holder__poppup holder__poppup-name"><Translate>email</Translate></div>
                                                <input ref={this.emailRef} id="id_email" maxlength="50" minlength="3" name="email"  required="required" type="email" />
                                            </div>
                                            <div>
                                               <div class="holder__poppup holder__poppup-name"><Translate>social-link</Translate></div>
                                                <input  ref={this.socialRef} id="id_topic" pattern="https://.*" maxLength="50" minLength="2" name="social-link" required="required" type="url"/>
                                            </div>

                                            <div>
                                            <div class="holder__poppup holder__poppup-name"><Translate>post theme</Translate></div>
                                                <input ref={this.topicRef} id="id_social" maxLength="50" minLength="4"  required="required" type="text"/>
                                            </div>

                                            <button  type='submit' class="button14"   ><Translate>Send</Translate></button>
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

export  default withPoppupHOC(SuggestPoppup, '/blog/addTopicSuggestion/', 'SUGGEST')