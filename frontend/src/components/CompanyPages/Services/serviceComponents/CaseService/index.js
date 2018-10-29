import React, {Component, Fragment} from 'react'
import './index.css'
import Translate, { reactTranslateChangeLanguage } from "translate-components";
import PortolioPost from "../../../../DynamicContent/Header__Post/Portfolio__Post";

function CaseService(props) {
    return(
        <Fragment>
         <div id='case__wrapper' style={{background: '#fff'}}>
                <div className="container__case-studies">
                    <div className="case-title">
                      <h3><Translate>Case Studies</Translate></h3>
                    </div>
                    <div className="case-description">
                        <p><Translate>Evaluate our previous experience in</Translate> {props.name}. <Translate>Each case in our portfolio perfectly shows the way we work.</Translate></p>
                    </div>
                </div>
                <div className="case__service">
                    <PortolioPost {...props}/>
                </div>
                </div>
        </Fragment>
      
    )

}

export default CaseService;