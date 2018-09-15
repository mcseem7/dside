import React, {Component, Fragment} from 'react'
import './index.css'
import lang from './langImg.png'
import pl from './svg/006-poland.svg'
import ru from './svg/005-russia.svg'
import cz from './svg/003-czech-republic.svg'

 export  default  class LanguagePoppup extends Component {
  constructor(props) {
    super(props)
 


    this.state = {
        selectActive: false,  
        modalActive:false
    }
  }




  changeLanguage = (event) => {
    event.preventDefault()
   

  } 



  render() {

    return(
      <Fragment>
        <div className={`modal-overlay_language active`}>
          <div className={`modal-language  active`}>
<div className="model-content">
<div className='modal__left-lang'>
    <div className='modal__lang-img'>
<img src={lang} />
     </div>
</div>
          <div className="modal__right-lang">
              <h4>Oops! We couldn't detect your region</h4>

              <p>Please, select your language</p>

              <div className="international-flags">

                  <div className='flag-icon'>
                      <object type="image/svg+xml" data={pl}  ></object>
                  </div>

                  <div className='flag-icon'>
                      <object type="image/svg+xml" data={cz}  ></object>
                  </div>


                  <div className='flag-icon'>
                      <object type="image/svg+xml" data={ru}  ></object>
                  </div>

              </div>
          </div>
</div>
          </div>
        </div>
      </Fragment>
    )
  }

}



