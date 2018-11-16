import React, { Component, Fragment } from 'react'
import './index.css'
import lang from './langImg.png'
import pl from './svg/poland.svg'
import ru from './svg/russia.svg'
import en from './svg/uk.svg'
import { Link, withRouter } from 'react-router-dom'
import { reactTranslateChangeLanguage } from "translate-components";
import Helmet from 'react-helmet-async'

export default withRouter(class LanguagePoppup extends Component {
  constructor(props) {
    super(props)
  }

  alreadyUpdate = (data) => {
    localStorage.setItem('lang', `${data}`)
    this.props.handleChange()
    this.props.history.push(`/${data}`)
  }

  render() {
    return (
      <Fragment>
      <Helmet>
          <title>Dside  International</title>
      </Helmet>
        <div className={`modal-overlay_language active`}>
          <div className={`modal-language  active`}>
            <div className="model-content">
              <div className='modal__left-lang'>
                <div className='modal__lang-img'>
                  <img src={lang} />
                </div>
              </div>
              <div className="modal__right-lang">
                <h4>We are international</h4>

                <p>Let us speak using your native language:</p>

                <div className="international-flags">

                  <div className='flag-icon'>
                    <img src={pl} onClick={() => {
                      this.alreadyUpdate('pl')
                    }} />
                  </div>

                  <div className='flag-icon'>
                    <img src={ru} onClick={() => {
                      this.alreadyUpdate('ru')
                    }} />
                  </div>

                  <div className='flag-icon'>
                    <img src={en} onClick={() => {
                      this.alreadyUpdate('en')
                    }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

})



