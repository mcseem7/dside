import React, {Component} from 'react'
import ContactMap from './contactmap.svg'
import Header from '../../Basic/Header'
import './index.css'
import arrow from '../../sources/images/works__logo/arrow.svg'
import withDsideApi from "../../../HOC/Fetch";




 class Contact  extends  Component {
  constructor() {
    super()

    this.nameRef = React.createRef()
    this.phoneRef = React.createRef()

  }

   handleSubmit = (event) => {
     event.preventDefault()
     this.props.postData(this.nameRef, this.phoneRef)

   }


  render() {
   //  (document.getElementById("map_canvas"), {
   //    panControl: false,
   //    zoomControl: false,
   //    scaleControl: false,
   // });
   const framegoo = '<iframe src="https://snazzymaps.com/embed/98430" width="100%" height="400px" style="border:none;"></iframe>'
    return(
        <div>



          <section id="google__maps-container">
            <div className="google_map" dangerouslySetInnerHTML={{ __html: framegoo}}>
            
            </div>
          </section>
          <section id="contact-us__container">

            <div className="background__contactus">


              <div className="contact-us__form_container">



                <div className="left__form-container">
<div className="title__form-contact">
  <h3>Contact us</h3>
</div>

                  <div className="contactus__form_active">

                    <div className="clients__form">

                      <div className="form__titles">

                        <div className="title__drop">
                          <h3>Drop the line</h3>
                        </div>

                        <div className="question__form">
                          <p>Ready to talk to the team who can’t wait to<br />
                            take your brand to new, exciting places?
                          </p>
                        </div>

                      </div>

                      <div className="sending__form">
                        <form onSubmit={this.handleSubmit} id="form__dside">
                          <div className="inputs__send">
                            <div className="wrapper__name">
                              <input ref={this.nameRef} type="text" id="name" placeholder="name" />
                            </div>
                            <div className="wrapper__phone">
                              <input ref={this.phoneRef} id="phone" type="phone" placeholder="phone" />
                            </div>
                          </div>
                          <button className="dside__send">
                            <div className="button__content">
                              <span className='send__title'>Send</span> <img src={arrow} alt="" />
                            </div>
                          </button>
                        </form>
                      </div>
                    </div>


                    </div>


                </div>

                <div className="right__form-container">


                  <div className="right__form-question_title">
                    <h4>Awaiting Questions</h4>
                    <div className="right__form_phone">
                      <h2>+34234234234</h2>
                    </div>
                  </div>



                  <div className="right__form_street">
                    <h4>Find us here</h4>
                    <div className="right__form_phone">
                      <h2>Aleja Solidarności 117,  lok 805</h2>
                    </div>
                  </div>

                </div>


              </div>
              <div className="copyright__content">
                <div className="footer__copyright">
                <div className="copyright">
                  <p>2018 &copy; Dside Agency &trade;. All right reserved.</p>
                </div>

                <div className="social__icons">
                  <div className="social__icon-behance">
                    <a href="">        </a>
                  </div>

                  <div className="social__icon-instagram">
                    <a href="">       </a>
                  </div>
                </div>
                </div>
              </div>


            </div>

          </section>
        </div>
    )
  }
}

export default withDsideApi(Contact, '/home/addOrder/')